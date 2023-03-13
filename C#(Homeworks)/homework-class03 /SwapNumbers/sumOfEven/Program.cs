// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");



int[] arrays = new int[6];
Console.WriteLine("enter integer No1:");
int input1= Convert.ToInt32(Console.ReadLine());
Console.WriteLine("enter integer No2:");
int input2 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("enter integer No3:");
int input3 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("enter integer No4:");
int input4 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("enter integer No5:");
int input5 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Enter integer No6:");
int input6 = Convert.ToInt32(Console.ReadLine());
int sum = 0;

if (input1 % 2 == 0)
{
    sum += input1;
}
if (input2 % 2 == 0)
{
    sum += input2;
}
if (input3 % 2 == 0)
{
    sum += input3;
}
if (input4 % 2 == 0)
{
    sum += input4;
}
if (input5 % 2 == 0)
{
    sum += input5;
}
if (input6 % 2 == 0)
{
    sum += input6;
}

Console.WriteLine($"The result is: {sum}");