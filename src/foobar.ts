// error    Expected exception block, space or tab after '/*' in comment                   spaced-comment
/*Ejemplo que debe dar todos los warnings que airbnb detecta */

// warning  Unexpected console statement                                                   no-console
// error    Strings must use singlequote                                                   quotes
// error    Missing semicolon                                                              semi
// error    Infix operators must be spaced                                                 space-infix-ops
// error    Unexpected string concatenation of literals                                    no-useless-concat
console.log("DEBUG;"+"aaa")

// error    Line X exceeds the maximum line length of 100                                  max-len
// error    Opening curly brace does not appear on the same line as controlling statement  brace-style
// error    'foobar' is defined but never used                                             no-unused-vars
// error    There should be no spaces inside this paren                                    space-in-parens
// error    'param2' is defined but never used                                             no-unused-vars
function foobar( param1, param2, )
{
  // error  Identifier 'foo_var1' is not in camel case                                     camelcase
  // error  'foo_var1' was used before it was defined                                      no-use-before-define
  // error  All 'var' declarations must be at the top of the function scope                vars-on-top
  // error  Unexpected var, use let or const instead                                       no-var
  // error  Identifier 'foo_var1' is not in camel case                                     camelcase
  // error  'foo_var1' is assigned a value but never used                                  no-unused-vars
  foo_var1 = 3;
  var foo_var1;
}
