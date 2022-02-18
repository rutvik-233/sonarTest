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




print()
print("Table After Sorting")
print("---------------------------")
print("ID     Name     Address")
print("---------------------------")

for i in reversed(emp):
    
    temp=i
    print(str(i[0])+"       "+str(i[1])+"       "+str(i[2]))