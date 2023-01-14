var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');
var isCompleted = false;

function loadData(){
    let showCompletedDate = document.getElementById("divCompleted");
    showCompletedDate.style.display = "none"
}

function clickedRadio(val){
    let showCompletedDate = document.getElementById("divCompleted");
    isCompleted = val;
    isCompleted === true ? showCompletedDate.style.display = "block" : showCompletedDate.style.display = "none"
    console.log(isCompleted);
}

function saveData(){
    let goalName = document.getElementById("goalName").value;
    let goalDescription = document.getElementById("goalDescription").value;
    let targetDate = document.getElementById("targetDate").value;
    let completedDate =  document.getElementById("completedDate").value;

    console.log(goalName + '\n' + goalDescription + '\n' + targetDate + '\n' + isCompleted+ '\n' +completedDate);
    
}

function disableField() {
    const invalidForm = document.querySelector('form:invalid');
    const submitBtn = document.getElementById('submit');
    if (invalidForm) {
      submitBtn.setAttribute('disabled', true);
    } else {
      submitBtn.disabled = false;
    }
  }



myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


