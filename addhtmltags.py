
def add_anytag():



    z=None
    m=None




    with open("inputfile.txt",'r+') as infile,open("outputfile.txt","w+") as outfile:
        while  None in (z,m) :
            m = infile.readline()
            z=len(m)
            while z>0  :

                print (m)

                m="<p>"+ m + "</p>" + "\n"
            
                print (m, file = outfile)
                
                m=infile.readline()
                z=len(m)

    print (" \n")
    print ("Please your file is ready , do  locate your file as outputfile.txt")





    

    




