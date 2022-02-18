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

    


def merge(arr, l, m, r):
	n1 = m - l + 1
	n2 = r - m


	L = [0] * (n1)
	R = [0] * (n2)


	for i in range(0, n1):
		L[i] = arr[l + i]

	for j in range(0, n2):
		R[j] = arr[m + 1 + j]


	i = 0	
	j = 0	 
	k = l

	while i < n1 and j < n2:
		if int(L[i][0]) <= int(R[j][0]):
			arr[k] = L[i]
			i += 1
		else:
			arr[k] = R[j]
			j += 1
		k += 1

	while i < n1:
		arr[k] = L[i]
		i += 1
		k += 1


	while j < n2:
		arr[k] = R[j]
		j += 1
		k += 1




def merge_sort(arr, l, r):
	if l < r:


		m = l+(r-l)//2


		merge_sort(arr, l, m)
		merge_sort(arr, m+1, r)
		merge(arr, l, m, r)


arr = emp
n = len(arr)

merge_sort(arr, 0, n-1)





print()
print("Table After Sorted")
print("---------------------------")
print("ID     Name     Address")
print("---------------------------")
for i in arr:
    
    temp=i
    print(str(i[0])+"       "+str(i[1])+"       "+str(i[2]))
