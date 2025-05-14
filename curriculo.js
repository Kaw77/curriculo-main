function validateForm() {
        const name = document.getElementById('name').value;
        const suggestion = document.getElementById('suggestion').value;

        if (!name || !suggestion) {
          alert('Por favor, preencha todos os campos obrigatórios.');
          return false;
        }

        return true;
      }