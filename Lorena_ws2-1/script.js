document.addEventListener("DOMContentLoaded", function() {
    // variables
    var words = ["Learn", "Design", "Appreciate", "Create"],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 100; // Adjusted speed to make it more readable

    const CWAutoTyping = document.querySelector(".codewheel-auto-typing");

    function typingtext() {
        setInterval(function() {
            if (forwards) {
                // Typing forward
                if (offset < words[i].length) {
                    offset++;
                } else {
                    ++skip_count;
                    if (skip_count === skip_delay) {
                        forwards = false; // Switch to deleting
                        skip_count = 0;
                    }
                }
            } else {
                // Deleting backward
                if (offset > 0) {
                    offset--;
                } else {
                    forwards = true; // Start typing forward
                    i++;
                    if (i >= len) {
                        i = 0; // Loop back to the first word
                    }
                }
            }
            part = words[i].substr(0, offset);
            CWAutoTyping.textContent = part; // Update the content
        }, speed);
    }
    typingtext();
});
