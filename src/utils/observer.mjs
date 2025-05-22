"use strict";

export function setObserver() {
    const surahOptions = document.querySelector('.selectSurah');

    const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
            const {width} = entry.contentRect;

            if (width < 600) {
                surahOptions.style.gridTemplateColumns = "repeat(1, 1fr)";
            } else if (width < 900) {
                surahOptions.style.gridTemplateColumns = "repeat(2, 1fr)";
            } else {
                surahOptions.style.gridTemplateColumns = "repeat(3, 1fr)";
            }
        }
    });

    resizeObserver.observe(surahOptions);
}