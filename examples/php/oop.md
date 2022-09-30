# OOP

### Classes
```php
<?php

class Invoice
{

}

class InvoiceItem
{

}

class AchievmentBadge
{
    public $title;
    public $description;
    public $points;
    
    public function awardTo($user)
    {
        //
    }
}
```

### Objects
```php
<?php

class Team
{
    protected $name;
    protected $members = [];

    public function __construct($name, $members = [])
    {
        $this->name = $name;
        $this->members = $members;
    }

    public static function start(...$parameters)
    {
        return new static(...$parameters);
    }

    public function name()
    {
        return $this->name;
    }

    public function members()
    {
        return $this->members;
    }

    public function add($name)
    {
        $this->members[] = $name;
    }

    public function cancel()
    {
        
    }

    public function manager()
    {
        
    }
}

class Member
{
    protected $name;
    
    public function __construct($name)
    {
        $this->name = $name;
    }
    
    public function lastViewed()
    {
        
    }
}

$acme = Team::start('Acme', [new Member('John Doe'), new Member('Tomas Shelby')]);

$laracast = new Team('Laracast');
```

### Inheritance
```php
<?php

class AchievementType
{
    public function name()
    {

    }

    public function difficulty()
    {
        return 'intermediate';
    }

    public function icon()
    {
        
    }
}

class FirstThousandPoint extends AchievementType
{
    public function qualifier($user)
    {
        
    }

    public function name()
    {
        return 'Welcome Aboard!';
    }
}
```

### Interface
```php
<?php

interface NewsLetter
{
    public function subscribe($email);
}

class CampaignMonitor implements NewsLetter
{
    public function subscribe($email)
    {
        die('subscribe with CampaignMonitor');
    }
}

class Drip implements NewsLetter
{
    public function subscribe($email)
    {
        die('subscribe with Drip');
    }
}

class NewsLetterSubscriptionController
{
    public function store(NewsLetter $news_letter)
    {
        $news_letter->subscribe('examle@email.com');
    }
}

$controller = new NewsLetterSubscriptionController();

$controller->store(new Drip());
```

### Object Composition and Abstractions
```php
<?php

class Subscription
{
    private Gateway $gateway;

    public function __construct(Gateway $gateway)
    {
        $this->gateway = $gateway;
    }

    public function create()
    {

    }

    public function cancel()
    {
        $customer = $this->gateway->findCustomer();
    }
}

interface Gateway
{
    public function findCustomer();
    public function findSubscriptionByCustomerCustomer();
}

class BrainTreeGateway implements Gateway
{
    public function findCustomer()
    {
        
    }

    public function findSubscriptionByCustomerCustomer()
    {
        
    }
}

new Subscription(new BrainTreeGateway());
```

### Value Objects and Mutability
```php
<?php

class Age
{
    protected $age;

    public function __construct($age)
    {
        if ($age < 0 || $age > 120)
            throw new \http\Exception\InvalidArgumentException('That makes no sense');

        $this->age = $age;
    }

    public function increment()
    {
        return new self($this->age + 1);
    }

    public function get()
    {
        return $this->age;
    }
}

$age = new Age(35);
$age = $age->increment();
var_dump($age->get());
```

### Exception
```php
<?php

class MaximumReachedException extends Exception
{
    protected $message = 'You may not add more than 3 members';
}

class Member
{
    protected $name;

    public function __construct($name)
    {
        $this->name = $name;
    }
}

class Team
{
    protected $members = [];
    
    public function add(Member $member)
    {
        if (count($this->members) == 3)
            throw new MaximumReachedException();

        $this->members[] = $member;
    }

    public function members()
    {
        return $this->members;
    }
}

$team = new Team();

try {
    $team->add(new Member('Member One'));
    $team->add(new Member('Member Two'));
    $team->add(new Member('Member Three'));
    $team->add(new Member('Member Four'));
} catch (MaximumReachedException $e) {
    print_r($e);
    echo PHP_EOL;
}
```

