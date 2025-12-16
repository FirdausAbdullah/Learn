public class Main{
    public static void main(String[] args){
        System.out.println("My first Java code");
        System.out.print("print not printline");
        System.out.print("will be on same line\n");

        //This is a comment ............    
        
        /*This
        is a 
        multi-line comment*/ 

        // Variables ---------------
        String myName = "Daoooood";
        System.out.println("Hello " + myName);
        int myNumber = 121;
        final int UNMUTABLE_NUM = 15; //standard practice to capitalize constants
        // unmuteableNum = 12; - will cause error
        System.out.println(UNMUTABLE_NUM);
        float pointNumber = 12.77f; System.out.println(pointNumber);
        double doubleNumber = 234.77546d; System.out.println(doubleNumber);
        long longNumber = 1500000000L; System.out.println(longNumber);
        char charLetter = 'a'; System.out.println(charLetter); //can also use ascii char=65
        boolean boolTrue = true; System.out.println(boolTrue);
        boolean boolFalse = false; System.out.println(boolFalse);
        //var defined variable is automatically detected by compiler.
        //good to write complex types
        //var cars = new ArrayList<String>();
        //without var
        //ArrayList<String> cars2 = new ArrayList<String>();
        
        //PRIMITIVE data types
            /*
                byte, short, int, long, float, double, boolean, char
             */
        //NON-PRIMITIVE
            /* called REFERENCE types as they refer to objects
                String, Arrays, Classes
             */

        //can be TYPECAST 
        //      widening cast
        //      narrowing cast

}
}