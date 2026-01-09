// Estado de la aplicación
const appState = {
    guestCount: 1,
    selectedGender: null,
    userName: '',
    musicPlaying: false,
    firstInteraction: false
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initPredictionGame();
    initGuestCounter();
    initWhatsAppButton();
    initParallaxEffect();
    initBackgroundMusic();
});

// Animación de entrada suave
function initAnimations() {
    // Animación de fade in para secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar todas las secciones
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Animación inicial del contenedor
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';

        setTimeout(() => {
            container.style.transition = 'opacity 1s ease, transform 1s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Efecto parallax para nubes y estrellas
function initParallaxEffect() {
    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;

                // Efecto parallax para nubes
                const clouds = document.querySelectorAll('.cloud');
                clouds.forEach((cloud, index) => {
                    const speed = 0.3 + (index * 0.1);
                    const yPos = -(scrolled * speed);
                    cloud.style.transform = `translateY(${yPos}px)`;
                });

                // Efecto parallax para estrellas colgantes
                const stars = document.querySelectorAll('.star-hanging');
                stars.forEach((star, index) => {
                    const speed = 0.2 + (index * 0.05);
                    const yPos = -(scrolled * speed);
                    star.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.05}deg)`;
                });

                ticking = false;
            });

            ticking = true;
        }
    });
}

// Juego de predicción de género
function initPredictionGame() {
    const girlBtn = document.querySelector('.girl-btn');
    const boyBtn = document.querySelector('.boy-btn');
    const resultText = document.getElementById('predictionResult');

    if (girlBtn && boyBtn && resultText) {
        girlBtn.addEventListener('click', function() {
            selectGender('niña', this, boyBtn, resultText);
        });

        boyBtn.addEventListener('click', function() {
            selectGender('niño', this, girlBtn, resultText);
        });
    }
}

function selectGender(gender, selectedBtn, otherBtn, resultText) {
    // Guardar selección
    appState.selectedGender = gender;

    // Efecto visual en botones
    selectedBtn.style.transform = 'scale(1.1)';
    otherBtn.style.opacity = '0.6';

    setTimeout(() => {
        selectedBtn.style.transform = 'scale(1)';
        otherBtn.style.opacity = '1';
    }, 300);

    // Mostrar resultado con animación
    const messages = {
        'niña': '¡Crees que será una hermosa niña! 💗',
        'niño': '¡Crees que será un adorable niño! 💙'
    };

    resultText.textContent = messages[gender];
    resultText.style.color = gender === 'niña' ? '#d67d9f' : '#6fa8d4';

    // Animación de confeti de corazones
    createHeartConfetti(gender === 'niña' ? '#f4c2c2' : '#b8d4e8');
}

// Crear confeti de corazones
function createHeartConfetti(color) {
    const container = document.querySelector('.container');

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💕';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = '0.7';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.filter = `hue-rotate(${color === '#f4c2c2' ? '0deg' : '200deg'})`;

        document.body.appendChild(heart);

        // Animación de caída
        const duration = Math.random() * 2000 + 2000;
        const startX = parseFloat(heart.style.left);
        const startTime = Date.now();

        function animateHeart() {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;

            if (progress < 1) {
                const y = progress * window.innerHeight;
                const x = startX + Math.sin(progress * Math.PI * 4) * 30;

                heart.style.left = x + '%';
                heart.style.top = y + 'px';
                heart.style.opacity = 0.7 * (1 - progress);

                requestAnimationFrame(animateHeart);
            } else {
                heart.remove();
            }
        }

        animateHeart();
    }
}

// Contador de invitados
function initGuestCounter() {
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const counterDisplay = document.getElementById('counterDisplay');

    if (decreaseBtn && increaseBtn && counterDisplay) {
        decreaseBtn.addEventListener('click', function() {
            if (appState.guestCount > 1) {
                appState.guestCount--;
                updateCounterDisplay(counterDisplay);
                animateCounter(counterDisplay, 'decrease');
            } else {
                shakeElement(counterDisplay);
            }
        });

        increaseBtn.addEventListener('click', function() {
            if (appState.guestCount < 10) {
                appState.guestCount++;
                updateCounterDisplay(counterDisplay);
                animateCounter(counterDisplay, 'increase');
            } else {
                shakeElement(counterDisplay);
            }
        });
    }
}

function updateCounterDisplay(display) {
    display.textContent = appState.guestCount;
}

function animateCounter(element, direction) {
    const scale = direction === 'increase' ? 1.2 : 0.8;
    element.style.transition = 'transform 0.2s ease';
    element.style.transform = `scale(${scale})`;

    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
}

function shakeElement(element) {
    element.style.animation = 'shake 0.5s';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Añadir animación de shake al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Botón de WhatsApp con mensaje pre-escrito
function initWhatsAppButton() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const phoneNumber = '5214776688796'; // Número con código de país

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            const message = generateWhatsAppMessage();
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Animación antes de redirigir
            whatsappBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                whatsappBtn.style.transform = 'scale(1)';
                window.open(whatsappUrl, '_blank');
            }, 100);
        });
    }
}

function generateWhatsAppMessage() {
    const guestWord = appState.guestCount === 1 ? 'pase' : 'pases';
    let message = `¡Hola Vanessa! 🤍\n\n`;
    message += `Confirmo mi asistencia a la revelación de sexo de tu bebé.\n\n`;
    message += `📅 Fecha: 24 de Enero de 2026\n`;
    message += `👥 Asistirán: ${appState.guestCount} ${guestWord}\n`;

    if (appState.selectedGender) {
        const emoji = appState.selectedGender === 'niña' ? '💗' : '💙';
        message += `${emoji} Creo que será: ${appState.selectedGender}\n`;
    }

    message += `\n¡Nos vemos pronto! 💕`;

    return message;
}

// Validación antes de enviar (opcional)
function validateForm() {
    if (appState.guestCount < 1) {
        alert('Por favor, indica cuántos invitados asistirán.');
        return false;
    }
    return true;
}

// Añadir efecto de hover suave a elementos interactivos
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('button, .guess-option, .detail-card, .gift-item');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// Lazy loading de imágenes (para cuando se agreguen imágenes reales)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Prevenir zoom en móviles al hacer doble tap
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    const delta = now - (lastTap || now);
    const DOUBLE_TAP_DELAY = 300;

    if (delta < DOUBLE_TAP_DELAY && delta > 0) {
        event.preventDefault();
    }

    lastTap = now;
}, { passive: false });

let lastTap = 0;

// Control de música de fondo
function initBackgroundMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = musicToggle.querySelector('.music-icon');
    const musicText = musicToggle.querySelector('.music-text');

    if (!audio || !musicToggle) return;

    // Iniciar música al primer click en cualquier parte de la página
    function startMusicOnFirstClick() {
        if (!appState.firstInteraction) {
            appState.firstInteraction = true;

            audio.play().then(() => {
                appState.musicPlaying = true;
                updateMusicButtonState(musicToggle, musicIcon, musicText, true);
                showMusicMessage('🎵 Música activada');
            }).catch(error => {
                console.log('No se pudo reproducir la música automáticamente:', error);
                appState.musicPlaying = false;
                updateMusicButtonState(musicToggle, musicIcon, musicText, false);
            });

            // Remover el listener después del primer click
            document.removeEventListener('click', startMusicOnFirstClick);
            document.removeEventListener('touchstart', startMusicOnFirstClick);
        }
    }

    // Agregar listeners para el primer click
    document.addEventListener('click', startMusicOnFirstClick, { once: true });
    document.addEventListener('touchstart', startMusicOnFirstClick, { once: true });

    // Botón de control de música
    musicToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Evitar que active el listener de primer click

        if (appState.musicPlaying) {
            // Pausar música
            audio.pause();
            appState.musicPlaying = false;
            updateMusicButtonState(musicToggle, musicIcon, musicText, false);
            showMusicMessage('⏸️ Música pausada');
        } else {
            // Reproducir música
            audio.play().then(() => {
                appState.musicPlaying = true;
                appState.firstInteraction = true;
                updateMusicButtonState(musicToggle, musicIcon, musicText, true);
                showMusicMessage('▶️ Música reproduciéndose');
            }).catch(error => {
                console.log('Error al reproducir música:', error);
                showMusicMessage('❌ Error al reproducir');
            });
        }
    });

    // Manejar cuando la música termina (aunque está en loop)
    audio.addEventListener('ended', function() {
        appState.musicPlaying = false;
        updateMusicButtonState(musicToggle, musicIcon, musicText, false);
    });

    // Manejar errores de carga
    audio.addEventListener('error', function(e) {
        console.error('Error al cargar el archivo de audio:', e);
        musicToggle.style.display = 'none'; // Ocultar botón si hay error
    });
}

// Actualizar estado visual del botón
function updateMusicButtonState(button, icon, text, isPlaying) {
    button.classList.remove('playing', 'paused');

    if (isPlaying) {
        button.classList.add('playing');
        icon.textContent = '🎵';
        text.textContent = 'Playing';
    } else {
        button.classList.add('paused');
        icon.textContent = '⏸️';
        text.textContent = 'Paused';
    }
}

// Mostrar mensaje temporal
function showMusicMessage(message) {
    // Verificar si ya existe un mensaje
    let messageEl = document.querySelector('.music-start-message');

    if (messageEl) {
        messageEl.remove();
    }

    // Crear nuevo mensaje
    messageEl = document.createElement('div');
    messageEl.className = 'music-start-message';
    messageEl.textContent = message;
    document.body.appendChild(messageEl);

    // Remover después de la animación
    setTimeout(() => {
        if (messageEl && messageEl.parentNode) {
            messageEl.remove();
        }
    }, 3000);
}

// Log para debugging (remover en producción)
console.log('✨ Invitación de revelación de sexo cargada correctamente');
console.log('📱 Funcionalidades activas:', {
    animaciones: true,
    parallax: true,
    prediccion: true,
    contador: true,
    whatsapp: true,
    musica: true
});
