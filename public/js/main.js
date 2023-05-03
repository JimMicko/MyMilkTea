// login page
const loginPage = document.getElementById("loginPage");
const signUpBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");
const containerContainer = document.getElementById("containerContainer");

function showLoginPage(){
    if(loginPage.style.display == "none"){
        loginPage.style.display = "block"
    }
    else loginPage.style.display = "none"
}

function closeLoginPage(){
    loginPage.style.display = "none"
}

function showSignUp(){
    containerContainer.setAttribute("style", "left: -250px")
}

function showLogin(){
    containerContainer.setAttribute("style", "left: 40px")
}// initialize variable
const sidebarTabs = document.querySelectorAll(".sidebar ul li");

function show(){
    var input = document.getElementById('password');
    if(input.type === 'password'){
        input.type = 'text'}
    else{
        input.type = 'password'
    }
}

const mainSections = document.querySelectorAll(".main section");
const campaignCards = document.querySelectorAll(".campaignCard");
const dashboardSection = document.getElementById("dashboardSection");
const campaignSection = document.getElementById("campaignSection");
const employeesSection = document.getElementById("employeesSection");
const analyticSection = document.getElementById("analyticSection");
const earningsSection = document.getElementById("earningsSection");
const accountingSection = document.getElementById("accountingSection");
const directorySection = document.getElementById("directorySection");
const settingsSection = document.getElementById("settingsSection");
const helpSection = document.getElementById("helpSection");

sidebarTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        sidebarTabs.forEach(tabs => tabs.classList.remove("hover"));
        tab.setAttribute("class", "hover");
    })
})

campaignCards.forEach((tab) => {
    tab.addEventListener("click", () =>{
        campaignCards.forEach(tabs => tabs.setAttribute("style", "display : none"));
    })
})

// Dashboard section
function showDashboardSection(){
    dashboardSection.setAttribute("style", "display : block");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Campaign section
function showCampaignSection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : block");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
    campaignCards.forEach(tabs => tabs.setAttribute("style", "display : block"));
}

// Employees section
function showEmployeesSection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : block");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Analytics section
function showAnalyticsSection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : block");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Earnings section
function showEarningsSection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : block");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Accounting section
function showAccountingSection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : block");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

var expense_amount = document.getElementById("expense_amount");
var expense_purchases = document.getElementById("expense_purchases");
var expense_inputVat = document.getElementById("expense_inputVat");


function expense_function(){
    var result1 = expense_amount.value / 1.12;
    expense_purchases.value = result1.toFixed(2);
    var result2 = expense_amount.value - expense_purchases.value
    expense_inputVat.value = result2.toFixed(2);
}

var income_amount_collected = document.getElementById("income_amount_collected");
var income_cf_rate = document.getElementById("income_cf_rate");
var income_collectin_fee = document.getElementById("income_collectin_fee");


function income_function(){
    var result1 = income_amount_collected.value * income_cf_rate.value;
    income_collectin_fee.value = result1.toFixed(2);
}

const expense = document.getElementById("expense");
const income = document.getElementById("income");
const incomeTabBtn = document.getElementById("incomeTabBtn");
const expenseTabBtn = document.getElementById("expenseTabBtn");


function showIncomeTab(){
    expense.setAttribute("style", "display : none");
    income.setAttribute("style", "display : block");
    incomeTabBtn.setAttribute("style", "color : #ffbf00");
    expenseTabBtn.setAttribute("style", "color : white");
}

function showExpenseTab(){
    expense.setAttribute("style", "display : block");
    income.setAttribute("style", "display : none");
    incomeTabBtn.setAttribute("style", "color : white");
    expenseTabBtn.setAttribute("style", "color : #ffbf00");
}

// Directory section
function showDirectorySection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : block");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Settings section
function showSettingsSection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : block");
    helpSection.setAttribute("style", "display : none");
}

// Help section
function showHelpSection(){
    dashboardSection.setAttribute("style", "display : none");
    campaignSection.setAttribute("style", "display : none");
    employeesSection.setAttribute("style", "display : none");
    analyticSection.setAttribute("style", "display : none");
    earningsSection.setAttribute("style", "display : none");
    accountingSection.setAttribute("style", "display : none");
    directorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : block");
}