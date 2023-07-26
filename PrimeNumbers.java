import java.util.ArrayList;
import java.util.List;

public class PrimeNumbers {

    // Java uses explicit data types in method signatures and variable declarations.
    // Here, the isPrime function takes an integer 'num' as input and returns a boolean.
    public static boolean isPrime(int num) {
        // In Java, we use '{' and '}' to define code blocks, and 'if' statements are similar to JavaScript.
        // In this case, if 'num' is less than or equal to 1, we return false as 1 and negative numbers are not primes.
        if (num <= 1) {
            return false;
        }

        // In Java, we use a for loop like in JavaScript, but the syntax is slightly different.
        // We declare the loop variable 'i' and its data type (int) inside the loop's parentheses.
        // The loop continues while 'i * i' is less than or equal to 'num'.
        for (int i = 2; i * i <= num; i++) {
            // In Java, the modulo operator is '%', and the equality check is '==' (not '===' like in JavaScript).
            // If 'num' is divisible by 'i' (i.e., 'num % i' is 0), then it is not a prime number, and we return false.
            if (num % i == 0) {
                return false;
            }
        }

        // If the loop finishes without finding any divisors for 'num', it means 'num' is a prime number, and we return true.
        return true;
    }

    public static List<Integer> findPrimes(int start, int end) {
        // In Java, we specify the type of the variable (ArrayList<Integer>) in the declaration.
        List<Integer> primes = new ArrayList<>();

        // The 'for' loop is similar to JavaScript but with the correct Java syntax for 'int' data types.
        for (int num = start; num <= end; num++) {
            // The 'isPrime' function is called, similar to how it is called in JavaScript.
            // If 'num' is prime, we add it to the 'primes' list using the 'add' method.
            if (isPrime(num)) {
                primes.add(num);
            }
        }

        // Finally, we return the list of prime numbers.
        return primes;
    }

    public static void main(String[] args) {
        // Java uses the 'List' interface and the 'ArrayList' class from the 'java.util' package.
        // The 'List' interface specifies that 'primes' is a list of integers.
        List<Integer> primes = findPrimes(1, 100);

        // The 'System.out.println' statement is used to print the list of prime numbers.
        // 'println' is a method of 'PrintStream' used to print a line 
        System.out.println(primes);
    }
}
