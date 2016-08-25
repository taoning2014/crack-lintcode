// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// For example,
// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3

// No JavaScript running test avaiable for this problem
public class MovingAverage {
    private Queue<Integer> stack;
    private int size;
    private double sum;

    public MovingAverage(int size) {
        stack = new ArrayDeque<Integer>();
        this.size = size;
        this.sum = 0;
    }

    public double next(int val) {
        if (stack.size() == size) {
            sum -= stack.poll();
        }
        stack.add(val);
        sum += val;
        return sum / stack.size();
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage obj = new MovingAverage(size);
 * double param_1 = obj.next(val);
 */
