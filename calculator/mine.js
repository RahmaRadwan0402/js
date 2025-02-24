document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.innerText;

            if (button.classList.contains("clear")) {
                result.value = "";
            } else if (button.classList.contains("backspace")) {
                result.value = result.value.slice(0, -1);
            } else if (button.classList.contains("equal")) {
                try {
                    result.value = eval(result.value);
                } catch {
                    result.value = "خطأ!";
                }
            } else {
                result.value += buttonText;
            }
        });
    });
});