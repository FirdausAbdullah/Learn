public class Array{
    public static void main(String[] args){
        System.out.println("Array Practice");

        //Declaring an array
        String[] cars = new String[4];  //empty array with 4 space
        String[] guitars = {"Ibanez","Les Paul","Fender"}; //initialized array
        System.out.println(cars[0]); //empty array=null
        System.out.println(guitars[2]);
        //to change array value
        cars[1] = "Proton";
        System.out.println(cars[1]);
        //integer array
        int[] evenNum = {2,4,6,8};
        System.out.println(evenNum[3]);
        // Array.length
        System.out.println("Even Num array length: "+ evenNum.length);

        //Looping through an array
        for(int i=0;i<cars.length;i++){
            System.out.println(cars[i]);
        }
        for(int i=0;i<guitars.length;i++){
            System.out.println(guitars[i]);
        }
        for(int i=0;i<evenNum.length;i++){
            System.out.println(evenNum[i]);
        }

        //Looping with for-each
        for(String car:cars){
            System.out.println(car);
        }

        //MULTI DIMENSIONAL array
        int[][] numberz = {{1,3,5},{2,4,6}};
        System.out.println(numberz[0][0]);

        //loop for each
        for(int[] arr : numberz){
            for(int num : arr){
                System.out.println(num);
            }
        }

    }
}