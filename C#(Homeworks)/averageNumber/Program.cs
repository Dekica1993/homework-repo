// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Console.WriteLine("Please input four numbers!");
double numberOne = Convert.ToInt32(Console.ReadLine());
double numberTwo = Convert.ToInt32(Console.ReadLine());
double numberThree = Convert.ToInt32(Console.ReadLine());
double numberFour = Convert.ToInt32(Console.ReadLine());
double result = ((numberOne + numberTwo + numberThree + numberFour) / 4); 
Console.WriteLine("The average of:"  + numberOne +  ","
    + numberTwo + "," + numberThree+ "," + numberFour +  " " +
    " is:" + result);