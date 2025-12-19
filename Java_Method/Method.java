public class Method{



    public static void main(String[] args){
        System.out.println("Method practice");

        //calling a method
        myMethod();

        //method with param must be given all its arguments
        paramFx(1995,"My name is David");

        //calling methods with return values
        System.out.println(numberFx(5,10));
        System.out.println(boolFx(5,10));
        System.out.println(stringFx("This is a method returning a string"));
        //can also store return val in variables
        String myNameIs=stringFx("My name is David bruv");
        System.out.println(myNameIs);
        //calling overloaded methods
        System.out.println(stringFx("My age is: ", 30));
        System.out.println(addition(10,12));
        System.out.println(addition(5.3,122.345));
        
    }

    //Declaring a method (must be inside Class Method(in this case))
        static void myMethod(){
            System.out.println("myMethod is called.");
        }

    //Declaring fx with parameters
        static void paramFx(int num, String sentence){
            System.out.println("Number: "+num);
            System.out.println("String: "+sentence);
        }    

    //Declaring fx with return value
    //      MUST not be VOID
        static int numberFx(int a, int b){
            return a*b;
        }
        
        static boolean boolFx(int a, int b){
            return (a>b)? true:false;
        }

        static String stringFx(String myString){
            return myString;
        }

    //METHOD OVERLOADING
    // functions with different parameters can have same name
            //stringFX already exist but we can overload it
        static String stringFx(String myString,int age){
            return myString + age;
        }

    //e.g can have 2 functions that do different types of addition
        static int addition(int a, int b){
            return a+b;
        }
        static double addition(double a, double b){
            return a+b;
        }
}