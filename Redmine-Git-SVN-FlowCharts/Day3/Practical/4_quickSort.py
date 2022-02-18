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

 


def partition(arr, low, high):
	i = (low-1)		 
	pivot = arr[high]	 
	
	for j in range(low, high):

		if int(arr[j][0]) <= int(pivot[0]):

			i = i+1
			arr[i], arr[j] = arr[j], arr[i]

	arr[i+1], arr[high] = arr[high], arr[i+1]
	return (i+1)




def quick_sort(arr, low, high):
	if len(arr) == 1:
		return arr
	if low < high:


		pi = partition(arr, low, high)


		quick_sort(arr, low, pi-1)
		quick_sort(arr, pi+1, high)


arr =emp
n = len(arr)
quick_sort(arr, 0, n-1)







print()

print("Table After Sorting")
print("---------------------------")
print("ID     Name     Address")
print("---------------------------")
for i in arr:
    
    temp=i
    print(str(i[0])+"       "+str(i[1])+"       "+str(i[2]))
