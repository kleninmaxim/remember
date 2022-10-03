# DESIGN PATTERNS

### The decorator pattern

```php
<?php

interface CarService
{
    public function getCost();
    public function getDescription();
}

class Basic implements CarService
{
    public function getCost()
    {
        return 25;
    }

    public function getDescription()
    {
        return 'Basic';
    }
}

class OilChange implements CarService
{
    protected CarService $carService;

    public function __construct(CarService $carService)
    {
        $this->carService = $carService;
    }

    public function getCost()
    {
        return 25 + $this->carService->getCost();
    }

    public function getDescription()
    {
        return $this->carService->getDescription() . ', and Oil Change';
    }
}

class Automate implements CarService
{
    protected CarService $carService;

    public function __construct(CarService $carService)
    {
        $this->carService = $carService;
    }

    public function getCost()
    {
        return 15 + $this->carService->getCost();
    }

    public function getDescription()
    {
        return $this->carService->getDescription() . ', and Automate';
    }
}

$car = new Basic();

echo $car->getCost() . PHP_EOL;

echo (new OilChange($car))->getCost();
echo (new OilChange($car))->getDescription();
```

### Gettin' Jiggy With Adapters
```php
interface eReaderInterface {
    public function turnOn();
    public function pressNextButton();
}

interface BookInterface
{
    public function open();
    public function turnPage();
}

class eReaderAdapter implements BookInterface 
{
    private $reader;

    public function __construct(eReaderInterface $reader)
    {
        $this->reader = $reader;
    }
    
    public function open()
    {
        return $this->reader->turnOn();
    }

    public function turnPage()
    {
        return $this->reader->pressNextButton();
    }
}

class Nook implements eReaderInterface
{
    public function turnOn()
    {
        var_dump('turn the Nook on');
    }
    
    public function pressNextButton()
    {
        var_dump('press the next button on the Nook');
    }
}

class Kindle implements eReaderInterface 
{
    public function turnOn()
    {
        var_dump('turn the Kindle on');
    }
    
    public function pressNextButton()
    {
        var_dump('press the next button on the Kindle');
    }
}

class Book implements BookInterface
{
    public function open()
    {
        var_dump('opening the paper book.');
    }

    public function turnPage()
    {
        var_dump('turning the page of the paper book.');
    }
} 

class Person {
    public function read(BookInterface $book)
    {
        $book->open();
        $book->turnPage();
    }
}

//(new Person)->read(new Book);
//(new Person)->read(new eReaderAdapter(new Kindle));
(new Person)->read(new eReaderAdapter(new Nook));
```

### The Template Method Pattern
```php
<?php

abstract class Sub
{
    public function make()
    {
        return $this->layBread()->addLettuce()->addPrimaryToppings()->addSausage();
    }

    public function layBread()
    {
        var_dump('Lay Bread');

        return $this;
    }

    public function addLettuce ()
    {
        var_dump('Add Letture');

        return $this;
    }

    public function addSausage ()
    {
        var_dump('Add Sausage');

        return $this;
    }

    abstract public function addPrimaryToppings();
}

class TurkeySub extends Sub
{
    public function addPrimaryToppings()
    {
        var_dump('Add Turkey');

        return $this;
    }
}

class VeggieSub extends Sub
{
    public function addPrimaryToppings()
    {
        var_dump('Add Veggie');

        return $this;
    }
}

(new TurkeySub())->make();
(new VeggieSub())->make();
```

### Pick a Strategy
```php
interface Logger
{
    public function log($data);
}

class LogToFile implements Logger
{
    public function log($data)
    {
        var_dump('Log to file');
    }
}

class LogToDatabase implements Logger
{
    public function log($data)
    {
        var_dump('Log to database');
    }
}

class LogToXWebService implements Logger
{
    public function log($data)
    {
        var_dump('Log to a Sass site');
    }
}

class App
{
    public function log($data, Logger $logger = new LogToFile())
    {
        $logger->log($data);
    }
}

(new App())->log('Some data here', new LogToDatabase());
```

### The Chain of Responsibility
```php
<?php

abstract class HomeChecker
{
    protected $successor;

    public function succeedWith(HomeChecker $successor)
    {
        $this->successor = $successor;
    }

    public function next(HomeStatus $home)
    {
        if ($this->successor) {
            $this->successor->check($home);
        }
    }

    abstract public function check(HomeStatus $home);
}

class Locks extends HomeChecker
{
    public function check(HomeStatus $home)
    {
        if (!$home->locked) {
            throw new Exception('The doors are not locked! Abort it!');
        }

        $this->next($home);
    }
}

class Lights extends HomeChecker
{
    public function check(HomeStatus $home)
    {
        if (!$home->lightsOff) {
            throw new Exception('The lights are still on! Abort it!');
        }

        $this->next($home);
    }
}

class Alarm extends HomeChecker
{
    public function check(HomeStatus $home)
    {
        if (!$home->alarmOn) {
            throw new Exception('The alarm has not been set! Abort it!');
        }

        $this->next($home);
    }
}

class HomeStatus
{
    public $alarmOn = true;
    public $locked = true;
    public $lightsOff = true;
}

$locks = new Locks();
$lights = new Lights();
$alarm = new Alarm();

$locks->succeedWith($lights);
$lights->succeedWith($alarm);

$locks->check(new HomeStatus());
```

### Observe This
```php
<?php

interface Subject
{
    public function attach($observable);
    public function detach($index);
    public function notify();
}

interface Observer
{
    public function handle();
}

class Login implements Subject
{
    protected $observers = [];

    public function attach($observable)
    {
        if (is_array($observable)) {
            return $this->attachObservers($observable);
        }

        $this->observers[] = $observable;

        return $this;
    }

    public function detach($index)
    {
        unset($this->observers[$index]);
    }

    public function notify()
    {
        foreach ($this->observers as $observer) {
            $observer->handle();
        }
    }

    private function attachObservers($observable)
    {
        foreach ($observable as $observer) {
            if (!$observer instanceof Observer) {
                throw new Exception();
            }

            $this->attach($observer);
        }
    }

    public function fire()
    {
        $this->notify();
    }
}

class LogHandler implements Observer
{
    public function handle()
    {
        var_dump('log something important');
    }
}

class EmailNotifier implements Observer
{
    public function handle()
    {
        var_dump('fire off an email');
    }
}

$login = new Login();

$login->attach([
    new LogHandler(),
    new EmailNotifier()
]);

$login->fire();
```
