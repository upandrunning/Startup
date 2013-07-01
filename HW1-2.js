<script>

function isPrime(tryNumber)
{
    var i = tryNumber;
    i--;
    while (i > 1) 
    {
        if(tryNumber%i != 0)
        {
            i--;
        }
        else 
        {
           return 1;
        }
    }
    return 0;
}

var i = 1;
var counter = 1;

while (counter <= 100) 
{
  var n = isPrime(i);
        
  if (n == 0) 
  {
    console.log(counter,'i is',i);
    counter ++;
  }
    
  i++;  


}

</script>
