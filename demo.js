// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

hljs.highlightAll();

// Toggle code visibility
function toggleCode(button) {
  const codeBlock = button.closest('.inputs-demo__input-card').querySelector('.inputs-demo__code-block');
  const isShowing = codeBlock.classList.contains('inputs-demo__code-block--show');

  // Close all other code blocks
  document.querySelectorAll('.inputs-demo__code-block--show').forEach(block => {
    block.classList.remove('inputs-demo__code-block--show');
    block.closest('.inputs-demo__input-card').querySelector('.inputs-demo__code-toggle').classList.remove('inputs-demo__code-toggle--active');
  });

  // Toggle current code block
  if (!isShowing) {
    codeBlock.classList.add('inputs-demo__code-block--show');
    button.classList.add('inputs-demo__code-toggle--active');
  } else {
    codeBlock.classList.remove('inputs-demo__code-block--show');
    button.classList.remove('inputs-demo__code-toggle--active');
  }
}

// Copy code to clipboard
function copyCode(button) {
  const codeBlock = button.closest('.inputs-demo__code-block');
  const code = codeBlock.querySelector('pre').textContent;

  navigator.clipboard.writeText(code).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    button.style.background = 'rgba(34, 197, 94, 0.2)';
    button.style.borderColor = 'rgba(34, 197, 94, 0.5)';

    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.background = '';
      button.style.borderColor = '';
    }, 2000);
  });
}

// Advanced form validation
async function validateAdvancedForm() {
  const form = document.getElementById('advanced-demo-form');
  const inputs = form.querySelectorAll('input-text, input-email, input-number');
  const statusDiv = document.getElementById('form-status');

  let allValid = true;
  let firstInvalid = null;

  for (const input of inputs) {
    const result = await input.validate();
    if (!result.valid) {
      allValid = false;
      if (!firstInvalid) firstInvalid = input;
    }
  }

  if (allValid) {
    statusDiv.style.background = '#10b981';
    statusDiv.style.color = 'white';
    statusDiv.textContent = '✅ Form is valid! All fields pass validation.';
    statusDiv.style.display = 'block';

    // Get form data
    const formData = new FormData(form);
    console.log('Form Data:', Object.fromEntries(formData));
  } else {
    statusDiv.style.background = '#ef4444';
    statusDiv.style.color = 'white';
    statusDiv.textContent = '❌ Please fix the validation errors above.';
    statusDiv.style.display = 'block';

    // Focus first invalid field
    if (firstInvalid) {
      firstInvalid.focus();
    }
  }

  // Hide status after 5 seconds
  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 5000);
}

function resetAdvancedForm() {
  const form = document.getElementById('advanced-demo-form');
  const inputs = form.querySelectorAll('input-text, input-email, input-number');
  const statusDiv = document.getElementById('form-status');

  inputs.forEach(input => input.reset());
  statusDiv.style.display = 'none';

  console.log('Form reset');
}

// Add some interactivity to inputs
document.addEventListener('DOMContentLoaded', () => {
  // Listen for validation events
  const inputs = document.querySelectorAll('input-text, input-email, input-password, input-number, input-phone, input-url, input-search, input-date, input-color');

  inputs.forEach(input => {
    input.addEventListener('input:success', () => {
      console.log(`✅ ${input.name} is valid`);
    });

    input.addEventListener('input:error', (e) => {
      console.log(`❌ ${input.name}: ${e.detail.error}`);
    });
  });

  // Simulate async validation for username
  const usernameInput = document.querySelector('input-search[name="username_check"]');
  if (usernameInput) {
    usernameInput.addEventListener('input:validate', async (e) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const value = e.target.value;
      if (value && value.length >= 3) {
        // Simulate checking if username is taken
        const takenUsernames = ['admin', 'user', 'test', 'demo'];
        if (takenUsernames.includes(value.toLowerCase())) {
          e.target.error = 'Username is already taken';
          e.target.valid = false;
          e.target.dispatchEvent(new CustomEvent('input:error', {
            bubbles: true,
            composed: true,
            detail: { error: 'Username is already taken' }
          }));
        } else {
          e.target.dispatchEvent(new CustomEvent('input:success', {
            bubbles: true,
            composed: true,
            detail: { message: 'Username is available!' }
          }));
        }
      }
    });
  }
});

// Theme switching functionality
let currentTheme = localStorage.getItem('inputsjs-theme') || 'default';

// Function to switch theme
function switchTheme(themeName) {
  // Update stylesheet
  const themeLink = document.getElementById('theme-stylesheet');
  themeLink.href = `./dist/themes/${themeName}.css`;

  // Update active state
  document.querySelectorAll('.inputs-demo__theme-btn').forEach(btn => {
    btn.classList.remove('inputs-demo__theme-btn--active');
  });
  document.querySelector(`[data-theme="${themeName}"]`).classList.add('inputs-demo__theme-btn--active');

  // Save to localStorage
  localStorage.setItem('inputsjs-theme', themeName);
  currentTheme = themeName;

  // Add transition effect
  document.body.style.transition = 'opacity 0.3s ease';
  document.body.style.opacity = '0.95';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 150);

  console.log(`Theme switched to: ${themeName}`);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial theme
  if (currentTheme !== 'default') {
    switchTheme(currentTheme);
  }

  // Add keyboard navigation for theme switching
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key >= '1' && e.key <= '6') {
      const themes = ['default', 'carbon', 'fluent', 'material', 'newspaper', 'classic'];
      const themeIndex = parseInt(e.key) - 1;
      if (themeIndex < themes.length) {
        switchTheme(themes[themeIndex]);
      }
    }
  });

  // Add theme info tooltip
  const themeButtons = document.querySelectorAll('.inputs-demo__theme-btn');
  themeButtons.forEach(btn => {
    const theme = btn.dataset.theme;
    btn.title = `Switch to ${theme.charAt(0).toUpperCase() + theme.slice(1)} theme (Alt + ${Array.from(themeButtons).indexOf(btn) + 1})`;
  });
  // Input Demo Card Web Component
  class InputDemoCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.render();
    }

    render() {
      const title = this.getAttribute('title') || '';
      const iconClass = this.getAttribute('icon-class') || '';

      this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .inputs-demo__input-card {
          background: var(--white);
          border-radius: 16px;
          padding: 30px;
          box-shadow: var(--card-shadow);
          transition: all 0.3s ease;
          position: relative;
        }

        @media (max-width: 768px) {
          .inputs-demo__input-card {
            max-width: 20rem;
            width: 100%;
          }
        }

        .inputs-demo__input-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--hover-shadow);
        }

        .inputs-demo__card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .inputs-demo__card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--dark);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .inputs-demo__card-title [name="icon"] {
          color: var(--primary);
          font-size: 1.1rem;
          width: 1rem;
          height: auto;
        }

        .inputs-demo__code-toggle {
          background: var(--light-gray);
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--gray);
          font-size: 0.9rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
        }

        .inputs-demo__code-toggle:hover {
          background: var(--primary);
          color: var(--white);
        }

        .inputs-demo__code-toggle--active {
          background: var(--primary);
          color: var(--white);
        }

        .inputs-demo__card-content {
          margin-bottom: 20px;
        }

        .inputs-demo__code-block {
          border-radius: 8px;
          margin-top: 20px;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          overflow-x: auto;
          display: none;
          position: relative;
        }

        .inputs-demo__code-block--show {
          display: block;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .inputs-demo__code-block pre {
          margin: 0;
          white-space: pre-wrap;
        }

        .inputs-demo__copy-code {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #e2e8f0;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .inputs-demo__copy-code:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      </style>

      <div class="inputs-demo__input-card">
        <div class="inputs-demo__card-header">
          <div class="inputs-demo__card-title">
            <slot name="icon"></slot>
            ${title}
          </div>
          <button class="inputs-demo__code-toggle" onclick="this.getRootNode().host.toggleCode()">
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg> Code
          </button>
        </div>
        <div class="inputs-demo__card-content">
          <slot name="input"></slot>
        </div>
        <div class="inputs-demo__code-block">
          <button class="inputs-demo__copy-code" onclick="this.getRootNode().host.copyCode()">
            <i class="fas fa-copy"></i> Copy
          </button>
          <slot name="code"></slot>
        </div>
      </div>
    `;
    }

    toggleCode() {
      const codeBlock = this.shadowRoot.querySelector('.inputs-demo__code-block');
      const button = this.shadowRoot.querySelector('.inputs-demo__code-toggle');
      const isShowing = codeBlock.classList.contains('inputs-demo__code-block--show');

      // Close all other code blocks
      document.querySelectorAll('input-demo-card').forEach(card => {
        const otherCodeBlock = card.shadowRoot.querySelector('.inputs-demo__code-block');
        const otherButton = card.shadowRoot.querySelector('.inputs-demo__code-toggle');
        if (otherCodeBlock && otherCodeBlock !== codeBlock) {
          otherCodeBlock.classList.remove('inputs-demo__code-block--show');
          otherButton.classList.remove('inputs-demo__code-toggle--active');
        }
      });

      // Toggle current
      if (!isShowing) {
        codeBlock.classList.add('inputs-demo__code-block--show');
        button.classList.add('inputs-demo__code-toggle--active');
      } else {
        codeBlock.classList.remove('inputs-demo__code-block--show');
        button.classList.remove('inputs-demo__code-toggle--active');
      }
    }

    copyCode() {
      const codeSlot = this.shadowRoot.querySelector('slot[name="code"]');
      const codeElement = codeSlot.assignedNodes().find(node => node.tagName === 'PRE');
      if (codeElement) {
        const code = codeElement.textContent;
        navigator.clipboard.writeText(code).then(() => {
          const button = this.shadowRoot.querySelector('.inputs-demo__copy-code');
          const originalHTML = button.innerHTML;
          button.innerHTML = '<i class="fas fa-check"></i> Copied!';
          button.style.background = 'rgba(34, 197, 94, 0.2)';
          button.style.borderColor = 'rgba(34, 197, 94, 0.5)';

          setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
            button.style.borderColor = '';
          }, 2000);
        });
      }
    }
  }

  // Register the component
  customElements.define('input-demo-card', InputDemoCard);

  // Highlight Code Web Component
  class HighlightCode extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.render();
    }

    render() {
      const code = this.innerHTML.trim();
      const language = this.getAttribute('lang');

      const unescapeHtml = (str) => {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = str;
        return textarea.value;
      };
      const unescaped = unescapeHtml(code);

      this.shadowRoot.innerHTML = `
        <style>
          .highlight-code-container {
            position: relative;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            overflow-x: auto;
            margin: 0;
          }

          .highlight-code-container pre {
            margin: 0;
            white-space: pre-wrap;
          }

          .copy-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #e2e8f0;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s ease;
          }

          .copy-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}
          .hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}
        </style>
        <div class="highlight-code-container">
          <button class="copy-btn" onclick="this.getRootNode().host.copyCode()">
            <i class="fas fa-copy"></i> Copy
          </button>
          <pre><code class="language-${language}">${code}</code></pre>
        </div>
      `;

      // Apply syntax highlighting
      const codeEl = this.shadowRoot.querySelector('code');
      hljs.highlightElement(codeEl);
    }

    copyCode() {
      const code = this.innerHTML.trim();
      const unescapeHtml = (str) => {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = str;
        return textarea.value;
      };
      const unescaped = unescapeHtml(code);
      navigator.clipboard.writeText(unescaped).then(() => {
        const button = this.shadowRoot.querySelector('.copy-btn');
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.background = 'rgba(34, 197, 94, 0.2)';
        button.style.borderColor = 'rgba(34, 197, 94, 0.5)';

        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.style.background = '';
          button.style.borderColor = '';
        }, 2000);
      });
    }
  }

  // Register the highlight-code component
  customElements.define('highlight-code', HighlightCode);

});
