import matplotlib.pyplot as plt
import numpy as np


def f1(x):
    return 3 * x ** 2


def f2(x):
    return 4 * x - 3


x = np.linspace(-5, 15, 100)  # Generate 100 x-values between -5 and 15

y1 = f1(x)
y2 = f2(x)

plt.plot(x, y1, 'o-', label='f(x) = 3x^2')
plt.plot(x, y2, 'o-', label='f(x) = 4x - 3')

plt.xlabel('x')
plt.ylabel('y')
plt.title('Graphs of f(x) = 3x^2 and f(x) = 4x - 3')
plt.grid(True)
plt.legend()

plt.show()
