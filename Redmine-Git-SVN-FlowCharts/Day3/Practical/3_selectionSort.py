emp = []
employee="Enter Employee "
for i in range(0,5):
    
    for j in range(0,1):

        emp1=[None, None, None]
        emp1[0]=input(employee+str(i+1)+" ID=")
        emp1[1]=input(employee+str(i+1)+" Name=")
        emp1[2]=input(employee+str(i+1)+" Address=")
    emp.append(emp1)



print()
print("Table Before Sorting")
print("---------------------------")
print("ID     Name     Address")
print("---------------------------")

for i in emp:
    
    temp=i
    print(str(i[0])+"       "+str(i[1])+"       "+str(i[2]))

    


A = emp
  
for i in range(len(A)):
      
    min_idx = i
    for j in range(i+1, len(A)):
        if int(A[min_idx][0]) > int(A[j][0]):
            min_idx = j
              
    A[i], A[min_idx] = A[min_idx], A[i]
  

print()
print("Table After Sorting")
print("---------------------------")
print("ID     Name     Address")
print("---------------------------")

for i in A:
    
    temp=i
    print(str(i[0])+"       "+str(i[1])+"       "+str(i[2]))
