
def add_anytag():



    z=None
    m=None




    with open("inputfile.txt",'r+') as infile,open("outputfile.txt","w+") as outfile:
        while  None in (z,m) :
            m = infile.readline()
            z=len(m)
            while z>0  :
                m="<p>"+ m + "</p>" + "\n"

                print (m, file = outfile)
                print (m)
                m=infile.readline()
                z=len(m)

    print ("please your file is ready , do  locate your file as outputfile.txt")





    

    




