import Price from "../Price/Price";

const PriceOption = () => {
   const PriceOptions = [
     {
       id: 1,
       name: "Basic",
       price: 29.99,
       features: [
         "Gym equipment access",
         "Locker access",
         "1 free fitness assessment",
         "Water station",
         "5% merchandise discount",
         "Non-peak hour access",
         "Basic app workout tracking",
       ],
     },
     {
       id: 2,
       name: "Standard",
       price: 49.99,
       features: [
         "Gym & locker access",
         "Group fitness classes",
         "2 free training sessions",
         "Sauna access",
         "Nutrition workshops",
         "10% merchandise discount",
         "Priority equipment use",
         "Monthly guest pass",
       ],
     },
     {
       id: 3,
       name: "Premium",
       price: 69.99,
       features: [
         "All gym access",
         "Unlimited classes",
         "5 free training sessions",
         "Steam room & sauna",
         "Priority support",
         "Nutrition counseling (2/month)",
         "Advanced workout tracking",
         "15% merchandise discount",
         "Monthly guest pass + smoothie",
       ],
     },
     {
       id: 4,
       name: "VIP",
       price: 99.99,
       features: [
         "Full facility access",
         "Private locker",
         "Personalized workout plan",
         "Unlimited training",
         "Jacuzzi & lounge access",
         "Free merchandise",
         "VIP parking",
         "Weekly guest pass",
         "Locker laundry service",
       ],
     },
   ];


    return (
      <div className="m-12">
        <h1 className="text-3xl">Price Option</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PriceOptions.map((option) => (
            <Price key={option.id} option={option}></Price>
          ))}
            </div>
            
      </div>
    );
};

export default PriceOption;