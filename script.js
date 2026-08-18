/* Reset e Variáveis */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --rgb-1: #ff0055;
  --rgb-2: #00ffcc;
  --rgb-3: #9d00ff;
  --speed: 6s;
}

body {
  background-color: #06080b;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(20, 25, 35, 0.8) 0%, #06080b 100%),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 100% 100%, 30px 30px, 30px 30px;
  color: #e6edf3;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 30px 15px;
}

/* Modo Turbo (Ativado via JS) */
body.turbo-mode {
  --speed: 1.5s;
  animation: bgPulse 1s infinite alternate;
}

@keyframes bgPulse {
  0% { background-color: #06080b; }
  100% { background-color: #12031a; }
}

/* Barra de Progresso */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  background: linear-gradient(90deg, var(--rgb-1), var(--rgb-2), var(--rgb-3));
  z-index: 9999;
  transition: width 0.1s linear;
  box-shadow: 0 0 10px var(--rgb-2);
}

/* Layout Principal */
.blog-container {
  width: 100%;
  max-width: 680px;
}

/* Cabeçalho */
.blog-header {
  text-align: center;
  margin-bottom: 30px;
}

.rgb-text {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  animation: rgbGlow var(--speed) infinite linear;
}

.subtitle {
  color: #8b949e;
  font-size: 1rem;
  margin-top: 5px;
}

.status-bar {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
  font-size: 0.85rem;
  background: rgba(22, 27, 34, 0.8);
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #30363d;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.green-text { color: #00ffcc; }

/* Botão Turbo */
.control-panel {
  margin-top: 15px;
}

.turbo-btn {
  background: transparent;
  color: #ff0055;
  border: 2px solid #ff0055;
  padding: 8px 18px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 0, 85, 0.2);
}

.turbo-btn:hover {
  background: #ff0055;
  color: #fff;
  box-shadow: 0 0 20px rgba(255, 0, 85, 0.8);
}

/* Animações RGB */
@keyframes rgbGlow {
  0% { color: var(--rgb-1); text-shadow: 0 0 15px var(--rgb-1); }
  33% { color: var(--rgb-2); text-shadow: 0 0 15px var(--rgb-2); }
  66% { color: var(--rgb-3); text-shadow: 0 0 15px var(--rgb-3); }
  100% { color: var(--rgb-1); text-shadow: 0 0 15px var(--rgb-1); }
}

@keyframes rgbBorder {
  0% { border-color: var(--rgb-1); box-shadow: 0 0 15px rgba(255, 0, 85, 0.2); }
  33% { border-color: var(--rgb-2); box-shadow: 0 0 15px rgba(0, 255, 204, 0.2); }
  66% { border-color: var(--rgb-3); box-shadow: 0 0 15px rgba(157, 0, 255, 0.2); }
  100% { border-color: var(--rgb-1); box-shadow: 0 0 15px rgba(255, 0, 85, 0.2); }
}

/* Posts */
.content-feed {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.post-card {
  background: rgba(22, 27, 34, 0.85);
  backdrop-filter: blur(8px);
  border: 2px solid var(--rgb-1);
  border-radius: 14px;
  padding: 25px;
  animation: rgbBorder var(--speed) infinite linear;
  transition: transform 0.3s ease;
}

.post-card:hover {
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.tag {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}

.tag-ia { background: rgba(0, 255, 204, 0.15); color: #00ffcc; border: 1px solid #00ffcc; }
.tag-hardware { background: rgba(157, 0, 255, 0.15); color: #c864ff; border: 1px solid #c864ff; }

.read-time {
  font-size: 0.8rem;
  color: #8b949e;
}

.post-card h2 {
  font-size: 1.35rem;
  margin-bottom: 10px;
}

.post-card p {
  color: #c9d1d9;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 20px;
}

/* Botões de Ação */
.card-footer {
  display: flex;
  gap: 12px;
  border-top: 1px solid #30363d;
  padding-top: 15px;
}

.action-btn {
  background: #21262d;
  color: #fff;
  border: 1px solid #30363d;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn:hover {
  background: #30363d;
  transform: scale(1.05);
}

.like-btn.active {
  background: #ff0055;
  border-color: #ff0055;
  box-shadow: 0 0 12px rgba(255, 0, 85, 0.6);
}

/* Seção de Comentários */
.comments-section {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 14px;
  padding: 20px;
  margin-top: 10px;
}

.comments-section h3 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #00ffcc;
}

.comment-input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.comment-input-group input {
  flex: 1;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 10px 14px;
  color: #fff;
  outline: none;
}

.comment-input-group input:focus {
  border-color: #00ffcc;
}

.send-btn {
  background: #00ffcc;
  color: #000;
  font-weight: bold;
  border: none;
  padding: 0 18px;
  border-radius: 8px;
  cursor: pointer;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.comment-item {
  background: #0d1117;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  border-left: 3px solid #9d00ff;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Toast Notification */
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #00ffcc;
  color: #000;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.5);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}
