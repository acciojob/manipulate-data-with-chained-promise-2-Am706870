//your JS code here. If required.
function processArray() {
            const outputDiv = document.getElementById("output");
            
            // Step 1: Initial Promise with a 3-second delay
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            })
            // Step 2: Filter out odd numbers (after 1 second)
            .then(numbers => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const evens = numbers.filter(num => num % 2 === 0);
                        outputDiv.textContent = evens.join(",");
                        resolve(evens);
                    }, 1000);
                });
            })
            // Step 3: Multiply even numbers by 2 (after 2 seconds)
            .then(evens => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const doubled = evens.map(num => num * 2);
                        outputDiv.textContent = doubled.join(",");
                        resolve(doubled);
                    }, 2000);
                });
            });
        }

        // Call the function when the script loads
        processArray();
