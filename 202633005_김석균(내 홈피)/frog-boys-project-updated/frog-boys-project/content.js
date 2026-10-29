window.addEventListener("message", function (event) {
    if (!event.data || event.data.type !== "frog-scroll") {
        return;
    }

    const target = document.getElementById(event.data.target);

    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    }
});
