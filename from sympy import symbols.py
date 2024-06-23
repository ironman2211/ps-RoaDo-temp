from sympy import symbols, Eq, solve
import re

def transform(side):
  side = re.sub(r'(\d)x', r'\1*x', side)
  side = re.sub(r'x(\d)', r'x*\1', side)
  return side

def MissingDigit(eq_str):

  x = symbols('x')

  # eq_str = eq_str.replace("x","*x",1)
  # print(eq_str)

  lhs,rhs = list(map(transform,eq_str.split("=")))

  # lhs = lhs.replace("x","*x*",1)
  # print("lhs-after replace", lhs)

  # lhs= re.sub(r'(\d)x', r'\1*x', lhs)
  # lhs= re.sub(r'x(\d)', r'x*\1', lhs)


  # lhs = re.sub(r'\d+x\d+','x',lhs)
  # print(lhs)

  eq = Eq(eval(lhs), eval(rhs))

  res = solve(eq, x)

  # print("x is",res)

  return 0 if len(res)==0 else res[0]

# keep this function call here 
print(MissingDigit(input()))