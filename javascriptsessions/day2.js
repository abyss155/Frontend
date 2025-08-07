//var a=10;                            //var                                                let                                     const
    // console.log(a);                     //traditional                                        block{} level scope                     block level scope 
    // console.log(typeof a)               //global, functional scope                                                                   
                                          
    var k=99;
    //console.log(c)  
    function test()                      // variable / function hoisting
     {                                  
        console.log("Welcome to KIIT");

        let b = 18;                             
                                                // TDZ hoisted value = undefined (cannot access before init)

        if (true) {
            console.log(c);                     // initialised
            var c = 45;
            var c = 63;

            var k;
            k = 100;

            let x;
            x = 9;

            console.log(c);
        }

        if (true)                               // can be redeclared in the same scope         // cannot be redeclared in the same scope
        {
            let a = 100;                        
            const j = "Apple";                  
            // j = "Mango";                        // ❌ This line will throw an error (const cannot be reassigned)
        }

        if (true) {
            let a = 200;
        }

        console.log(c);                   // can only be declared without init      
        console.log(k);                   // can be reinitialised
    }

    test();


    //tailor rule : measure twice cut once