 // str is the text being scanned. this example is a page from my bank statement.
 let str = "04/05/2021	Fee	74481312Y0000DFNN FOREIGN TRANS. FEE AUCKLAND NZ Less	Cleared	 $.72	 	$276.46 04/05/2021	Debit Dispute Charge	74481312Y0000DFNN MELODICS.C* MELODICS... More	Cleared	 $23.99	 	$277.1804/05/2021	Debit Dispute Charge	24445002Y00RVTZ68 WALGREENS #19032 SAL... More	Cleared	 $20.00	 	$301.1704/05/2021	Debit Dispute Charge	24692162X2X8H1EWK SQ *FLOAT SPA 19 Sal... More	Cleared	 $14.00	 	$321.1704/05/2021	Transfer Credit	MOBILE XFER FROM SAV ***6662 ... More	Cleared	 	 $180.00	$335.1704/01/2021	Debit Dispute Charge	24204292V01DRS7GW Spotify USA 877-7781... More	Cleared	 $10.71	 	$155.1703/31/2021	Debit Dispute Charge	VENMO 3264681992PAYMENT WE... More	Cleared	 $7.00	 	$165.8803/31/2021	Debit Dispute Charge	P.O.S. PURCHASE 7-ELEVEN 3898 W 47... More	Cleared	 $21.83	 	$172.8803/29/2021	Debit Dispute Charge	P.O.S. PURCHASE MAVERIK #5 5701 W. 7... More	Cleared	 $10.51	 	$194.7103/29/2021	Debit Dispute Charge	24011342N001BAQV4 DOORDASH*VILLAGE INN... More	Cleared	 $17.46	 	$205.2203/29/2021	Debit Dispute Charge	24011342N000E2QZ4 DOORDASH*CAFE RIO ME... More	Cleared	 $28.40	 	$222.6803/29/2021	Debit Dispute Charge	24692162M2Y016ZXM SQ *FLOAT SPA 19 Sal... More	Cleared	 $43.00	 	$251.0803/26/2021	Check 9900132 View Image	CHECK	Cleared	 $72.00	 	$294.0803/24/2021	Debit Dispute Charge	P.O.S. PURCHASE CHEVRON/HO CHEVRON/H... More	Cleared	 $10.95	 	$366.0803/23/2021	Debit Dispute Charge	P.O.S. PURCHASE 7-ELEVEN 3898 W 47... More	Cleared	 $16.50	 	$377.0303/23/2021	Electronic Deposit 5883030 Dispute Charge	DoorDash, Inc. 1800948598DoorDash, CC... More	Cleared	 	 $60.00	$393.5303/22/2021	Debit Dispute Charge	VENMO 3264681992PAYMENT WE... More	Cleared	 $50.00	 	$333.5303/22/2021	Debit Dispute Charge	24692162G2XL7GLN6 NINTENDO *AMERICAUS ... More	Cleared	 $15.07	 	$383.503/22/2021	Debit Dispute Charge	24011342E000V010K DOORDASH*VICTORS PIZ... More	Cleared	 $22.55	 	$398.603/19/2021	Debit Dispute Charge	AMZ_STORECRD_PMT9069872000PAYMENT WE... More	Cleared	 $96.57	 	$421.1503/19/2021	Debit Dispute Charge	P.O.S. PURCHASE 7-ELEVEN 3898 W 47... More	Cleared	 $16.50	 	$517.7203/19/2021	Debit Dispute Charge	24692162E2XLGRVGW SQ *FLOAT SPA 19 Sal... More	Cleared	 $43.00	 	$534.22 DOO$.25 DOORDASH $.72 "

// userInput string is the keyword to look for, it will return the next found '$' value for every occurence of the given string. UserInput is called to findInput, which than calls findDollarSum whenever a match is found.
//  let userInput = 'DOORDASH';
 //userInput = document.getElementById('keyword')
let userInput = "FLOAT SPA"

// result logged on last line

//findDollarSum is called by findInput (not to be confused with our entire str string)
function findDollarSum(str){
   //primary bool
    let bool = false
    //created secondary bool to verify when to stop adding to numStr
    let bool2 = false
    
    let sum = 0
    let numStr = ''
    //numArr is for console.logs. separated into two functions for simplicity.
    let numArr = []
    let isCash = false
for (let i = 0; i <str.length+1; i++){
   console.log(str[i])
    if(str[i] == '$') {
        console.log(str[i]+str[i+1])
        isCash = true
    }
    
    if(str[i] === '.' && isCash) {
      
        numStr+=str[i]
        bool = true 
        //decBool = true
        continue
    }
   else{
if(str[i] >= '0' && str[i] <= '9' && isCash) {
   
    bool = true 
    bool2 = true
}
else {
    //decbool = false
    bool = false
}
   }
if(bool === false && bool2 === true) {
   
    sum+= Number(numStr) 
    numArr.push(Number(numStr))
    console.log(sum)
                                            //return
    return sum
    numStr =''
    bool2 = false
    isCash = false
}

if(bool) {
    numStr += str[i]
}
}
console.log(numArr)
return sum

}
//console.log(findDollarSum(str))

function findInput(){
    // highlighted()
    str = document.getElementById('statementEntry').value
    userInput = document.getElementById('keyword').value

    let numArr = []
    let sum = 0;

    for(let i = 0; i < str.length+1; i++){
        if(userInput[0] === str[i]){
            let characterMatch = true
            for (let j = 0; j < userInput.length; j++){
                if(userInput[j] !== str[i+j]) characterMatch = false
        }
            if(characterMatch){        
            sum +=findDollarSum(str.split('').slice(i, str.length).join(''))
            numArr.push(findDollarSum(str.split('').slice(i, str.length).join('')))
        }
    }
}
console.log(numArr)
document.getElementById('resultdisplay').innerHTML = `${sum}`
// return sum
}

 function highlighted(){
    
    document.getElementById("statementEntry").value = window.getSelection().toString();
 }
let buttonClick = document.getElementById('Submit')

buttonClick.addEventListener('click', findInput);

// findInput(document.getElementById('statementEntry').value)
//^ logs the sum of all DOORDASH purchases (69.13)