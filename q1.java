import java.util.*;
import java.lang.*;

public class q1 extends Thread
{
    public void run()
    {
        for(int k=1;k<=100;k++)
        {
            System.out.println(k);
            try
            {
                Thread.sleep(1000);
                if(k%10 == 0)
                {
                    System.out.println("Another ten numbers counted");
                }
            }
            catch(Exception e)
            {
                System.out.println(e);
            }
        }
    }
    public static void main(String[] args)
    {
        q1 count = new q1();
        count.start();
    }
}