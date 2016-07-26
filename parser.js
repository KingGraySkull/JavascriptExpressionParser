function parser(exp)
{    
    var result = 0;
    var postfix = "";
    function isOperand(token)
    {
        var isoperand = false;
        if((token >= 0 && token <=9) || token === ".")
        {
            isoperand = true;
        }
        return isoperand;
    }
    
    function isOperator(token)
    {
        var isoperator = false;
        switch(token)
        {
            case "+":
            case "-":
            case "*":
            case "/":
            case "%":
            case "^":
                isoperator = true;
                break;
        }
        return isoperator;
    }
    
    function getPrecedence(operator)
    {
        var precedence = 0;
        switch(operator)
        {
            case "+":
            case "-":
                precedence = 1;
                break;
            case "*":
            case "/":
            case "%":
                precedence = 2;
                break;
            case "^":
                precedence = 3;
                break;
        }            
        return precedence;
    }
    
    function calculate(operand1,operand2,operator)
    {
        var output = 0;
        switch(operator)
        {
            case "+":
                output = operand1 + operand2;
                break;
            case "-":
                output = operand1 - operand2;
                break;
            case "*":
                output = operand1 * operand2;
                break;
            case "/":
                if(operand2 !== 0)
                {
                    output = operand1 / operand2;
                }
                else
                {
                    output = "Error:Cannot Divide By Zero"; 
                }
                break;
            case "%":
                output = Math.round(operand1) % Math.round(operand2);
                break;
            case "^":
                output = Math.pow(operand1,operand2);
                break;
        }
        return output;
    }
    
    function infixToPostfix(exp)
    {
        var expression = exp;
        var stack = new Stack();
        var postfix = "";
        
        for(var i = 0; i < expression.length; i++)
        {
            if(expression[i]  === " ")
            {
                continue;
            }
            else if(isOperand(expression[i]))
            {
                var digit = "";
                var j = i;
                while(isOperand(expression[j]))
                {
                    digit += expression[j];
                    j++;
                }
                i = --j;
                digit += ",";
                postfix += digit;
            }
            else if (isOperator(expression[i]))
            {
              while(!stack.isEmpty() && (stack.getTop() !== "(") && (getPrecedence(stack.getTop()) >= getPrecedence(expression[i]))) 
              {
                  postfix += stack.pop();
              }
              stack.push(expression[i]);
            }
            else if(expression[i] === "(")
            {
                stack.push(expression[i]);
            }
            else if(expression[i] === ")")
            {
                while(!stack.isEmpty() && stack.getTop() !== "(")
                {
                    postfix += stack.pop();
                }
                stack.pop();
            }
        }
        
        while(!stack.isEmpty())
        {
            postfix += stack.pop();
        }
        return postfix;        
    }
    
    function evaluatePostFix(postfix)
    {
        var stack = new Stack();
        var result = 0;
        
        for(var i = 0; i <= postfix.length; i++)
        {
            if(postfix[i] === " " || postfix === ",")
            {
                continue;
            }
            else if(isOperand(postfix[i]))
            {
                var digit = "";
                var j = i;
                while(isOperand(postfix[j]))
                {
                    digit += postfix[j];
                    j++;
                }
                i = --j;
                var num = Number.isNaN(parseFloat(digit))?NaN:parseFloat(digit);
                stack.push(num);
            }
            else if(isOperator(postfix[i]))
            {
                var rightOperand = stack.pop();
                var leftOperand = stack.pop();
                var output = calculate(leftOperand,rightOperand,postfix[i]);
                stack.push(parseFloat(output));
            }
        }
        result = stack.pop();
        return result;
    }
    
    postfix = infixToPostfix(exp);
    result = evaluatePostFix(postfix);
    return result;
}