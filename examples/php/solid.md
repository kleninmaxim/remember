# Solid Principals

### Single Responsibility
* Class should have one, and only one, reason to change.
```php
<?php

class SalesReporter
{
    private $repository;

    public function __construct(SalesRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function between($startDate, $endDate, SalesOutputInterface $formatter)
    {
        $sales = $this->repository->between($startDate, $endDate);
        
        return $formatter->output($sales);
    }
}

interface SalesRepositoryInterface {
    public function between(Carbon $startDate, Carbon $endDate);
}

class CollectionSalesRepository implements SalesRepositoryInterface {
    public function between(Carbon $startDate, Carbon $endDate)
    {
        return collect([['created_at' => new Carbon('2021-03-19 14:43:40'), 'charge' => '2111']])->whereBetween('created_at', [$startDate, $endDate])->sum('charge') / 100;
    }
}

interface SalesOutputInterface {
    public function output(float $sales);
}

class SalesHtmlOutput implements SalesOutputInterface {

    public function output(float $sales)
    {
        return "<h1>Sales: $sales</h1>";
    }
}
```

### Open-closed principals
* Entitles should be open for extension but closed for modification.
* Avoid code rot.
* Separate extensibility behavior behind an interface, and flip the dependencies.
```php
<?php

interface Shape
{
    public function area();
}

class Circle implements Shape
{
    protected $radius;

    public function __construct($radius)
    {
        $this->radius = $radius;
    }

    public function area()
    {
        return $this->radius * $this->radius * 3.141592;
    }
}

class Square implements Shape
{
    protected $width;
    protected $height;

    public function __construct($width, $height)
    {
        $this->width = $width;
        $this->height = $height;
    }

    public function area()
    {
        return $this->width * $this->height;
    }
}

class AreaCalculate
{
    public function calculate($shapes)
    {
        foreach ($shapes as $shape) {
            $area[] = $shape->area();
        }

        return array_sum($area);
    }
}
```

### Liskov Substitution
* Derivable classes must be substitutable for their base classes.
```php
<?php

interface LessonRepositoryInterface
{
    public function getAll(): array;
}

class FileLessonRepository implements LessonRepositoryInterface
{
    public function getAll(): array
    {
        return [];
    }
}

class DbLessonRepository implements LessonRepositoryInterface
{
    public function getAll(): array
    {
        return DB::table('lessons')->get()->toArray();
    }
}

```

### Interface Segregation
* A client should not be force to implement an interface that doesn't use.
```php
<?php

interface WorkableInterface
{
    public function work();
}

interface SleepableInterface
{
    public function sleep();
}

interface ManageableInterface
{
    public function beManaged();
}

class HumanWorker implements WorkableInterface, SleepableInterface, ManageableInterface
{
    public function work()
    {

    }

    public function sleep()
    {

    }

    public function beManaged()
    {
        $this->work();
        $this->sleep();
    }
}

class AndroidWorker implements WorkableInterface, ManageableInterface
{
    public function work()
    {

    }

    public function beManaged()
    {
        $this->work();
    }
}

class Captain
{
    public function manage(ManageableInterface $worker)
    {
        $worker->beManaged();
    }
}
```

### Dependency Inversion
* Depends on abstraction, not concretion.
* Dependency inversion does not equal dependency injection.

That example of bad architecture, because high level module (`PasswordReminder`) depends on low level module (`MysqlConnection`)
```php
<?php

class PasswordReminder
{
    protected MysqlConnection $dbConnection;
    
    public function __construct(MysqlConnection $dbConnection)
    {
        $this->dbConnection = $dbConnection;
    }
}
```
Here a good example:
```php
<?php

interface ConnectionInterface
{
    public function connect();
}

class DbConnection implements ConnectionInterface
{
    public function connect()
    {
        
    }
}

class PasswordReminder
{
    protected ConnectionInterface $dbConnection;
    
    public function __construct(ConnectionInterface $dbConnection)
    {
        $this->dbConnection = $dbConnection;
    }
}
```