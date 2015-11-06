function formatCurrency(n, currency, decimal) {
    return currency + n.toFixed(decimal).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(pastorfuture, howlong){
	if (pastorfuture == 'future'){
		return Date.today().add(getRandomInt(0,howlong)).day().toString('MM/dd/yyyy');
	}
	if (pastorfuture == 'past'){
		return Date.today().add(-getRandomInt(0,howlong)).day().toString('MM/dd/yyyy');
	}
}

function getRandomArrayValue(array){
	return array[getRandomInt(0,array.length-1)];
};

function getNextUid(table){
	var rowCount = rbDB.rowCount(table);
	queryResult = rbDB.queryAll(table,{
		// Need to make this treat the UID as a number if it's going to work
		//sort: [['uid','DESC']],
		query: {'ID':rowCount}
	});

	var tempUid = queryResult[0].uid;
	var tempNum = tempUid.replace( /^\D+/g, '');
	var tempPre = tempUid.replace(tempNum, '');
	tempNum++;
	return tempPre+tempNum;
}

function getRandomLeadData(){
	var m = 2;
	for (var i = 0; i < 30; i++) {
		rbDB.insert("lead", 
			{uid: 'L'+ m++, 
			firstName: getRandomArrayValue(firstNameArray),
			lastName: getRandomArrayValue(lastNameArray),
			type: getRandomArrayValue(leadType),
			leadValue: getRandomInt(45, 100),
			rating: getRandomInt(1, 4),
			quality: 'a3',
			status: getRandomArrayValue(leadStatus),
			creditScore: getRandomInt(550, 900),
			assignedTo: '--',
			source: getRandomArrayValue(leadSource),
			lastContacted: getRandomDate('past',500),
			lastActivity: getRandomDate('past',500),
			products:'Credit, Checking',
			createDate: getRandomDate('past',365),
			}
		);
	}
}
function getRandomOpportunityData(){
	var m = 2;
	for (var i = 0; i < 30; i++) {
		rbDB.insert("opportunity", 
			{uid: 'O'+ m++, 
			firstName: getRandomArrayValue(firstNameArray),
			lastName: getRandomArrayValue(lastNameArray),
			type: getRandomArrayValue(leadType),
			leadValue: getRandomInt(45, 100),
			rating: getRandomInt(1, 4),
			quality: 'a3',
			status: getRandomArrayValue(leadStatus),
			creditScore: getRandomInt(550, 900),
			assignedTo: '--',
			source: getRandomArrayValue(leadSource),
			lastContacted: getRandomDate('past',500),
			lastActivity: getRandomDate('past',500),
			products:'Credit, Checking',
			createDate: getRandomDate('past',365),
			}
		);
	}
}

var rbDB = new localStorageDB('rb', localStorage);
if(rbDB.isNew()){
	// create the "client" data
	var rows = [
		{uid: 'C1', firstName: 'Rachel', lastName:'Adams'},
		{uid: 'C2', firstName: 'Sarah', lastName:'Bui'},
	];
	// create the "client" table
	rbDB.createTableWithData('client', rows);
	
	// create the "prospect" data
	var rows = [
		{uid: 'P1', name: 'P Baun'},
		{uid: 'P2', name: 'P Pab'},
	];
	// create the "prospect" table
	rbDB.createTableWithData('prospect', rows);

	// create the "financialAccount" data
	var rows = [
		{uid: 'FA1', accountType: 'checking', role:'owner', accountId: getRandomInt(100000000, 999999999), status:'Good', name:'Cumulus Checking',
			json:{ 
				checkingType:'Preferred Checking',
				holders:'Joint',
				currentBalance:getRandomInt(10000, 100000),
				pendingWithdrawls: '--',
				pendingDeposits:'--',
				depositsNA:'--',
				totalAvailableBalance:100000,
				interestYTD:'--',
				interestRate:'1.4',
			},},
		{uid: 'FA2', accountType: 'mortgage', role:'owner', accountId: getRandomInt(100000000, 999999999), status:'Good', name:'Cumulus Mortgage',
			json:{ 
				mortgageType:'Regular',
				nextPaymentDate:getRandomDate('future',31),
				lastPaymentReceived:getRandomDate('past',31),
				outstandingPrincipal:'--',
				interestRate: '4.5',
				remainingTerm:'--',

			},},
		{uid: 'FA3', accountType: 'credit', role:'owner', accountId: getRandomInt(100000000, 999999999), status:'Good', name:'Cumulus Credit Card',
			json:{ 
				cardImage:'--',
				cardType:'Freedom',
				currentBalance: getRandomInt(100, 10000),
				paymentDue:getRandomDate('future', 31),
				minPayment:25,
				lastStatementBalance:getRandomInt(100, 10000),
				creditAvailable:'--',
				creditLimit: 10000,
			},},
		{uid: 'FA4', accountType: 'brokerage', role:'owner', accountId: getRandomInt(100000000, 999999999), status:'Good', name:'Cumulus Brokerage',
			json:{ 
				clientSegment:'Diamond',
				lifetimeValue: getRandomInt(100000, 999999),
				productsOwned:'',
				lastInteraction: getRandomDate('past',365),
			},},
	];
	// create the "financialAccount" table
	rbDB.createTableWithData('financialAccount', rows);

	// create the "application" data
	var rows = [
		{uid: 'A1', name: 'P Baun'}
	];
	// create the "application" table
	rbDB.createTableWithData('application', rows);

	// create the "opportunity" data
	var rows = [
		{uid: 'O1', 
		firstName: 'Rachel',
		lastName: 'Adams',
		type: 'Credit Card',
		leadValue: getRandomInt(45, 100),
		rating: getRandomInt(1, 4),
		quality: 'a3',
		status: 'Open',
		creditScore: getRandomInt(550, 900),
		assignedTo: '--',
		source: 'Mobile',
		lastContacted: getRandomDate('past',500),
		lastActivity: getRandomDate('past',500),
		products:'Credit, Checking',
		createDate: getRandomDate('past',1),
		}
	];
	// create the "opportunity" table
	rbDB.createTableWithData('opportunity', rows);
	getRandomOpportunityData();

	// create the "lead" data
	var rows = [
		{uid: 'L1', 
		firstName: 'Rachel',
		lastName: 'Adams',
		type: 'Credit Card',
		leadValue: getRandomInt(45, 100),
		rating: getRandomInt(1, 4),
		quality: 'a3',
		status: 'Open',
		creditScore: getRandomInt(550, 900),
		assignedTo: '--',
		source: 'Mobile',
		lastContacted: getRandomDate('past',500),
		lastActivity: getRandomDate('past',500),
		products:'Credit, Checking',
		createDate: getRandomDate('past',1),
	}];
	// create the "lead" table
	rbDB.createTableWithData('lead', rows);
	// add Random Lead Data
	getRandomLeadData();

	// create the "financialGoals" data
	var rows = [
		{uid: 'FG1', name: 'P Baun'}
	];
	// create the "financialGoals" table
	rbDB.createTableWithData('financialGoals', rows);

	// create the "accountRelationships" data
	var rows = [
		{uid: 'AR1', name: 'P Baun'}
	];
	// create the "accountRelationships" table
	rbDB.createTableWithData('accountRelationships', rows);

	// create the "employeeProfile" data
	var rows = [
		{uid: 'EP1', name: 'P Baun'}
	];
	// create the "employeeProfile" table
	rbDB.createTableWithData('employeeProfile', rows);

	// create the "leadRanking" data
	var rows = [
		{uid: 'LR1', name: 'P Baun'}
	];
	// create the "leadRanking" table
	rbDB.createTableWithData('leadRanking', rows);

	// create the "xref" data
	var rows = [
		{pid: 'C1', object: 'financialAccount', cid:'FA001'},
	];
	// create the "leadRanking" table
	rbDB.createTableWithData('xref', rows);

	// commit the database to localStorage
    // all create/drop/insert/update/delete operations should be committed
	rbDB.commit();
}
 
// select all financialAccount id's based on client ID
var queryResult1 = rbDB.queryAll("xref", {
    query: function(row) {
        if(row.pid == "C001" && row.object == "financialAccount") {
        	return true;
        } else {
        	return false;
        }
    }
});

// $(document).ready( function(){
// 	queryResult1.forEach(function(datum) {
// 		$('#main-tab-content-details').prepend('<div>'+datum.pid+': '+datum.object+': '+datum.cid+'</div>')
// 	});
// });


/*  MODAL */
$(document).ready( function(){

if (!localStorage.getItem("navToggle")) {
	// Set data
	localStorage.setItem("navToggle", 'Open')
}

    $(document).on('click', '.modal-action', function (){
    	var modalHeader, modalContent, modalFooter;

		var modalTarget = $(this).data('modal-target');
		switch(modalTarget){
			case 'add-member':
				modalHeader = 'Add Member';
				modalContent = 'Modal Content';
				modalFooter = '<button class="slds-button slds-button--neutral modal-action" data-modal-target = "cancel-modal">Cancel</button> <button class="slds-button slds-button--neutral slds-button--brand modal-action" data-modal-target = "save-modal">Save</button>';
				break;
			case 'new-case':
				modalHeader = 'New Case';
				modalContent = 'Modal Content';
				modalFooter = '<button class="slds-button slds-button--neutral modal-action">Cancel</button> <button class="slds-button slds-button--neutral slds-button--brand modal-action">Save</button>';
				break;
			case 'cancel-modal':
				console.log('Cancel Button');
				break;
			case 'related-client':
				modalHeader = 'Add Related Client';
				modalContent = '<div class="slds-grid slds-wrap"> <div class="slds-size--1-of-2 slds-p-right--x-small slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">First Name</span> <input class="slds-input" type="text" /> </label> </div> <div class="slds-size--1-of-2 slds-p-left--x-small slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">Last Name</span> <input class="slds-input" type="text" /> </label> </div> <div class="slds-size--1-of-1 slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">Role</span> <input class="slds-input" type="text" /> </label> </div> <div class="slds-size--1-of-2 slds-p-right--x-small slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">End Date</span> <div class="slds-input-has-icon slds-input-has-icon--right slds-dropdown-trigger" style="display:block;"> <svg aria-hidden="true" class="slds-input__icon"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event"></use> </svg> <input class="slds-input" type="text" value="6/23/15" /> <!-- Begin Datepicker --> <div class="slds-dropdown slds-dropdown--left slds-datepicker" style="position:fixed;"aria-hidden="false" data-selection="multi"> <div class="slds-datepicker__filter slds-grid"> <div class="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--3-of-4"> <div class="slds-align-middle"> <button class="slds-button slds-button--icon-container"> <svg aria-hidden="true" class="slds-button__icon slds-button__icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use> </svg> <span class="slds-assistive-text">Previous Month</span> </button> </div> <h2 id="month" class="slds-align-middle" aria-live="assertive" aria-atomic="true">June</h2> <div class="slds-align-middle"> <button class="slds-button slds-button--icon-container"> <svg aria-hidden="true" class="slds-button__icon slds-button__icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use> </svg> <span class="slds-assistive-text">Next Month</span> </button> </div> </div> <div class="slds-picklist slds-picklist--fluid slds-shrink-none"> <button id="year" class="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true">2015 <svg aria-hidden="true" class="slds-icon slds-icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use> </svg> </button> </div> </div> <table class="datepicker__month" role="grid" aria-labelledby="month"> <thead> <tr id="weekdays"> <th id="Sunday"> <abbr title="Sunday">S</abbr> </th> <th id="Monday"> <abbr title="Monday">M</abbr> </th> <th id="Tuesday"> <abbr title="Tuesday">T</abbr> </th> <th id="Wednesday"> <abbr title="Wednesday">W</abbr> </th> <th id="Thursday"> <abbr title="Thursday">T</abbr> </th> <th id="Friday"> <abbr title="Friday">F</abbr> </th> <th id="Saturday"> <abbr title="Saturday">S</abbr> </th> </tr> </thead> <tbody> <tr> <td class="slds-disabled-text" headers="Sunday" role="gridcell" aria-disabled="true"> <span class="slds-day">31</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">1</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">2</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">3</span> </td> <td headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">4</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">5</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">6</span> </td> </tr> <tr> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">7</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">8</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">9</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">10</span> </td> <td headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">11</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">12</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">13</span> </td> </tr> <tr> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">14</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">15</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">16</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">17</span> </td> <td class="slds-is-today" headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">18</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">19</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">20</span> </td> </tr> <tr class="slds-has-multi-row-selection"> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">21</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">22</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Tuesday" role="gridcell" aria-selected="true"> <span class="slds-day">23</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Wednesday" role="gridcell" aria-selected="true"> <span class="slds-day">24</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Thursday" role="gridcell" aria-selected="true"> <span class="slds-day">25</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">26</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">27</span> </td> </tr> <tr class="slds-has-multi-row-selection"> <td class="slds-is-selected slds-is-selected-multi" headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">28</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">29</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">30</span> </td> <td class="slds-disabled-text" headers="Wednesday" role="gridcell" aria-disabled="true"> <span class="slds-day">1</span> </td> <td class="slds-disabled-text" headers="Thursday" role="gridcell" aria-disabled="true"> <span class="slds-day">2</span> </td> <td class="slds-disabled-text" headers="Friday" role="gridcell" aria-disabled="true"> <span class="slds-day">3</span> </td> <td class="slds-disabled-text" headers="Saturday" role="gridcell" aria-disabled="true"> <span class="slds-day">4</span> </td> </tr> </tbody> </table> </div> <!-- End Datepicker --> </div> </label> </div> <div class="slds-size--1-of-2 slds-p-left--x-small slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">Start Date</span> <div class="slds-input-has-icon slds-input-has-icon--right slds-dropdown-trigger" style="display:block;"> <svg aria-hidden="true" class="slds-input__icon"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event"></use> </svg> <input class="slds-input" type="text" value="6/29/15" /> <!-- Begin Datepicker --> <div class="slds-dropdown slds-dropdown--left slds-datepicker" style="position:fixed; left:51%;" aria-hidden="false" data-selection="multi"> <div class="slds-datepicker__filter slds-grid"> <div class="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--3-of-4"> <div class="slds-align-middle"> <button class="slds-button slds-button--icon-container"> <svg aria-hidden="true" class="slds-button__icon slds-button__icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use> </svg> <span class="slds-assistive-text">Previous Month</span> </button> </div> <h2 id="month" class="slds-align-middle" aria-live="assertive" aria-atomic="true">June</h2> <div class="slds-align-middle"> <button class="slds-button slds-button--icon-container"> <svg aria-hidden="true" class="slds-button__icon slds-button__icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use> </svg> <span class="slds-assistive-text">Next Month</span> </button> </div> </div> <div class="slds-picklist slds-picklist--fluid slds-shrink-none"> <button id="year" class="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true">2015 <svg aria-hidden="true" class="slds-icon slds-icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use> </svg> </button> </div> </div> <table class="datepicker__month" role="grid" aria-labelledby="month"> <thead> <tr id="weekdays"> <th id="Sunday"> <abbr title="Sunday">S</abbr> </th> <th id="Monday"> <abbr title="Monday">M</abbr> </th> <th id="Tuesday"> <abbr title="Tuesday">T</abbr> </th> <th id="Wednesday"> <abbr title="Wednesday">W</abbr> </th> <th id="Thursday"> <abbr title="Thursday">T</abbr> </th> <th id="Friday"> <abbr title="Friday">F</abbr> </th> <th id="Saturday"> <abbr title="Saturday">S</abbr> </th> </tr> </thead> <tbody> <tr> <td class="slds-disabled-text" headers="Sunday" role="gridcell" aria-disabled="true"> <span class="slds-day">31</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">1</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">2</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">3</span> </td> <td headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">4</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">5</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">6</span> </td> </tr> <tr> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">7</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">8</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">9</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">10</span> </td> <td headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">11</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">12</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">13</span> </td> </tr> <tr> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">14</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">15</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">16</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">17</span> </td> <td class="slds-is-today" headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">18</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">19</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">20</span> </td> </tr> <tr class="slds-has-multi-row-selection"> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">21</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">22</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Tuesday" role="gridcell" aria-selected="true"> <span class="slds-day">23</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Wednesday" role="gridcell" aria-selected="true"> <span class="slds-day">24</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Thursday" role="gridcell" aria-selected="true"> <span class="slds-day">25</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">26</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">27</span> </td> </tr> <tr class="slds-has-multi-row-selection"> <td class="slds-is-selected slds-is-selected-multi" headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">28</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">29</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">30</span> </td> <td class="slds-disabled-text" headers="Wednesday" role="gridcell" aria-disabled="true"> <span class="slds-day">1</span> </td> <td class="slds-disabled-text" headers="Thursday" role="gridcell" aria-disabled="true"> <span class="slds-day">2</span> </td> <td class="slds-disabled-text" headers="Friday" role="gridcell" aria-disabled="true"> <span class="slds-day">3</span> </td> <td class="slds-disabled-text" headers="Saturday" role="gridcell" aria-disabled="true"> <span class="slds-day">4</span> </td> </tr> </tbody> </table> </div> <!-- End Datepicker --> </div> </label> </div> </div>'; 
				modalFooter = '<button class="slds-button slds-button--neutral modal-action" data-modal-target = "cancel-modal">Cancel</button> <button class="slds-button slds-button--neutral slds-button--brand modal-action" data-modal-target = "save-modal">Save</button>';
				break;
			default:
				modalHeader = 'New Switch Needed';
				modalContent = 'data-modal-target = '+ modalTarget;
				modalFooter = '<button class="slds-button slds-button--neutral modal-action" data-modal-target = "cancel-modal">Cancel</button> <button class="slds-button slds-button--neutral slds-button--brand modal-action" data-modal-target = "save-modal">Save</button>';
				break;
		};
		$('#modal-header').empty();
		$('#modal-header').append(modalHeader);

		$('#modal-content').empty();
		$('#modal-content').append(modalContent);

		$('#modal-footer').empty();
		$('#modal-footer').append(modalFooter);

    	$( "#modal" ).toggleClass( "slds-hide slds-fade-in-open");
    });
});