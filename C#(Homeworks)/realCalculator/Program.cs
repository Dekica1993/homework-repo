// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");




Console.WriteLine("Input 2 numbers and operator");
int number1 = Convert.ToInt32(Console.ReadLine());
int number2 = Convert.ToInt32(Console.ReadLine());
string inputOp = Console.ReadLine();
Console.WriteLine("The result is:" + inputOp);

if (inputOp == "+")
{
    Console.WriteLine(number1 + number2);
}
if (inputOp == "-")
{
    Console.WriteLine(number1 - number2);
}
if (inputOp == "*")
{
    Console.WriteLine(number1 * number2);
}
if (inputOp == "/")
{
    Console.WriteLine(number1 / number2);
}


