import Card from "../Card/Card";

const Cards = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Fit",
            "features": [
                "Access to cardio equipment",
                "Free weights",
                "Locker room facilities",
                "Standard shower access",
                "Open access during non-peak hours"
            ],
            "price": 20
        },
        {
            "id": 2,
            "name": "Standard Fit",
            "features": [
                "Includes Basic Fit features",
                "Group fitness classes",
                "Swimming pool access",
                "Access to strength training machines",
                "Discounts on select wellness products"
            ],
            "price": 40
        },
        {
            "id": 3,
            "name": "Premium Fit",
            "features": [
                "Includes Standard Fit features",
                "Personal training sessions (2 per month)",
                "Sauna and steam room access",
                "Priority booking for classes",
                "Advanced wellness assessment"
            ],
            "price": 60
        },
        {
            "id": 4,
            "name": "Elite Fit",
            "features": [
                "Includes Premium Fit features",
                "Access to VIP lounge and refreshments",
                "Unlimited guest passes",
                "Exclusive access to advanced equipment",
                "Complimentary fitness gear and accessories",
                "Priority booking for all facilities"
            ],
            "price": 80
        },
        {
            "id": 5,
            "name": "Student Fit",
            "features": [
                "Access to cardio equipment",
                "Free weights and core strength area",
                "Select group classes (students only)",
                "Discounted cafeteria items",
                "Access during off-peak hours"
            ],
            "price": 15
        },
        {
            "id": 6,
            "name": "Family Fit",
            "features": [
                "Includes Standard Fit features for up to 4 family members",
                "Discounted personal training sessions",
                "Family-friendly group fitness classes",
                "Childcare services available",
                "Special family events and programs"
            ],
            "price": 100
        },
        {
            "id": 7,
            "name": "Senior Fit",
            "features": [
                "Includes Basic Fit features",
                "Special senior fitness programs",
                "Discounted spa services",
                "Low-impact classes designed for seniors",
                "Access to wellness seminars and workshops"
            ],
            "price": 25
        },
        {
            "id": 8,
            "name": "Weekend Warrior",
            "features": [
                "Access on weekends only to all gym equipment",
                "Locker rooms with premium amenities",
                "Cardio areas and functional training zones",
                "Weekend-only group classes",
                "Discounts on café items during weekends"
            ],
            "price": 10
        }
    ]
    
    return (
        <div className="container mx-auto mt-20">
            <h2 className="text-3xl text-center">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {
                priceOptions.map(option => <Card key={option.id} option={option}></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;