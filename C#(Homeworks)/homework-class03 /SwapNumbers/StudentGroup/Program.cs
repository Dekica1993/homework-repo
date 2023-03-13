// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


string[] G1 = { "Dejan", "Elena", "Biljana", "Ana", "Bojan" };
string[] G2 = { "Marija", "Monika", "Tamara", "Ema", "Teo" };
Console.WriteLine("Enter student group:(There are 1 or 2)");
int inputNumber = Convert.ToInt32(Console.ReadLine());

if (inputNumber == 1)
{
    Console.WriteLine("The students of G1 are:");
    Console.WriteLine(G1[0]);
    Console.WriteLine(G1[1]);
    Console.WriteLine(G1[2]);
    Console.WriteLine(G1[3]);
    Console.WriteLine(G1[4]);
}
if (inputNumber == 2)
{
    Console.WriteLine("The students of G2 are:");
    Console.WriteLine(G2[0]);
    Console.WriteLine(G2[1]);
    Console.WriteLine(G2[2]);
    Console.WriteLine(G2[3]);
    Console.WriteLine(G2[4]);
}
else
{
    Console.WriteLine("Invalid number");
}
