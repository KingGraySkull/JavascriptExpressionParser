function Stack()
{
    var top = -1;
    var storage = {};
    
    this.push = function(data)
    {
        var topElement = ++top;
        storage[topElement] = data;
        
    };
    
    this.pop = function()
    {
        if(top !== -1)
        {
            var topElement = storage[top];
            delete storage[top];
            top--;
            return topElement;
        }
    };
    
    this.printStack = function()
    {
        var size = top;
        var output = "[ ";
        if(!this.isEmpty())
        {
            for(var i = 0; i <= size; i++)
            {
                output += storage[i];
                output += " ";
            }
            output += " ]";
        }
        console.log(output);
    };
    
    this.isEmpty = function()
    {      
      if(top === -1)
      {
        return true;        
      }
      else
      {
        return false;          
      }
    };
    
    this.getTop = function() 
    {
        if(top !== -1)
        {
            return storage[top];
        }
    };
}