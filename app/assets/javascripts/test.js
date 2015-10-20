var firstNameArray = ['Cindy', 'Henry', 'Charles', 'Andrea', 'Carey', 'Cristopher', 'Dan', 'Deborah', 'Frank', 'Jack', 'Janice', 'Kay', 'Michael', 'Nancy', 'Rachel', 'Randy', 'Robert', 'Stefanie', 'Peter', 'Steve', 'Stuart', 'Victoria', 'Lyn','Sally','Judy','Sophia','Aiden','Emma','Jackson','Olivia','Ethan','Isabella','Liam','Ava','Mason','Lily','Noah','Zoe','Lucas','Chloe','Jacob','Mia','Jayden','Madison','Jack','Emily','Logan','Ella','Ryan','Madelyn','Caleb','Benjamin','Abigail','Aubrey','William','Addison','Avery','Alexander','Layla','Elijah','Hailey','Matthew','Amelia','Dylan','Hannah','James','Owen','Conner','Brayden','Carter','Charlotte','Kaitlyn','Harper','Kaylee','Sophie','Mackenzie','Peyton','Riley','Grace','Brooklyn','Sarah','Aaliyah','Anna','Arianna','Ellie','Natalie','Isabelle','Lillian','Evelyn','Elizabeth','Lyla','Lucy','Claire','Makayla','Kylie','Audrey','Landon','Joshua','Luke','Daniel','Gabriel','Nicholas','Nathan','Oliver','Andrew','Gavin','Cameron','Eli','Max','Isaac', 'Evan','Samuel','Grayson','Tyler','Zachary','Wyatt','Joseph','Therese', 'Meda', 'Chadrick', 'Adan', 'Halle', 'Susie', 'Mabelle', 'Frederic', 'Lilla', 'Jovan', 'Melvin', 'Jeramie', 'Austyn', 'Celestine', 'Macy', 'Oscar', 'Ardith', 'Kelly', 'Kraig', 'Lisandro', 'Brendan', 'Drew', 'Carlos', 'Jayde', 'Ida', 'Arnulfo', 'Richard', 'Robyn', 'Jeanette', 'Euna', 'Carlos', 'Carlos', 'Lydia', 'Remington', 'Cooper', 'Coleman', 'Vincenzo', 'Angela', 'Lillian', 'Madaline', 'Mercedes', 'Marie', 'Margret', 'Pierre', 'Francisca', 'Angelica', 'Lavinia', 'Tanya', 'Katelin', 'Sabina', 'Finn', 'Daija', 'Lois', 'Bria', 'Eino', 'Cassidy', 'Ellie', 'Martina', 'Rhett', 'Jordy', 'Angelina', 'Jaycee', 'Gabe', 'Chad', 'Clair', 'Torey', 'Johnpaul', 'Toby', 'Damien', 'Rex', 'Foster', 'Joyce', 'Daija', 'Damion', 'Chyna', 'Alexandria', 'Elisha', 'Elian', 'Natalie', 'Stephen', 'Jeffrey', 'Garrick', 'Madisen', 'Delphine', 'Coby', 'Christop', 'Glen', 'Desmond', 'Bo', 'Johnnie', 'Cecile', 'Trace', 'Shaina', 'Samson', 'Angelita', 'Mafalda', 'Garrett', 'Teresa', 'Nakia', 'Darlene', 'Clint', 'Mac', 'Jazmyne', 'Kathryne', 'Liza', 'Nathanael', 'Amie', 'Donna', 'Leta', 'Monte', 'Maximillia', 'Foster', 'Marty', 'Jordan', 'Elvera', 'Tyreek', 'Sherwood', 'Marcel', 'Herminia', 'Ocie', 'Monserrat', 'Jose', 'Lola', 'Dandre', 'Linnea', 'Albert', 'Berenice', 'Sydnie', 'Leora', 'Kristofer', 'Jonatan', 'Jaron', 'Jaiden', 'Joany', 'Nathanial', 'Hattie', 'Ethyl', 'Daija', 'Arlo', 'Elinore', 'Alexis', 'Raymond', 'Davon', 'Vern', 'Annette', 'Kathryne', 'Lavon', 'Carrie', 'Kelsi', 'Vinnie', 'Leo', 'Kaley', 'Gideon', 'Gudrun', 'Percy', 'Antonia', 'Elvie', 'Barbara', 'Martina', 'Ayden', 'Catharine', 'Ayana', 'Orland', 'Layne', 'Joshua', 'Savanna', 'Janick', 'Marvin', 'Liliana', 'Alanna', 'Chase', 'Arno', 'Iliana', 'Emery', 'Emmalee', 'Mathias', 'Agustin', 'Audie', 'Coty', 'Dorris', 'Jordyn', 'Cleta', 'Delphia', 'Bernita', 'Jaquelin', 'Petra', 'Bruce', 'Laurie', 'Cydney', 'Charity', 'Houston', 'Nigel', 'Reina', 'Kelvin', 'Kelsi', 'Ruth', 'Bailee', 'Delilah', 'Annabel', 'Cali', 'Liliane', 'Justina', 'Creola', 'Freddie', 'Arielle', 'Leo', 'Arlie', 'Kale', 'Emory', 'Jovany', 'Easter', 'Rubie', 'Ashleigh', 'Dario', 'Braden', 'Effie', 'Delphia', 'Joel', 'Teresa', 'Lucile', 'Alene', 'Maxwell', 'Rex', 'Amelia', 'Lenny', 'Carlee', 'Jenifer', 'Desiree', 'Nakia', 'Rickie', 'Pablo', 'Arnaldo', 'Noemi', 'Afton', 'Flavie', 'Andres', 'Taya', 'Scot', 'Ona', 'Cristal', 'Vito', 'Matilda', 'Cleve', 'Coty', 'Rogelio', 'Isaac', 'Jadon', 'Berniece', 'Isabel', 'Brennon', 'Sallie', 'Jordyn', 'Pearline', 'Columbus', 'Lura', 'Easter', 'Kayleigh', 'Eveline', 'Cristina', 'Clement', 'Talon', 'Bell', 'Melyssa', 'Otto', 'Woodrow', 'Solon', 'Lillie', 'Ezra', 'Kiarra', 'Carmen', 'Carolina', 'Precious', 'Giovanny', 'Owen', 'Garnet', 'Aleen', 'Linwood', 'Ronaldo', 'Cordie', 'Jarred', 'Richie', 'Jarrod', 'Marlon', 'Rhett', 'Keith', 'Maurice', 'Coty', 'Guido', 'Manuela', 'Alek', 'Edmond', 'Rosanna', 'Cheyanne', 'Ariane', 'Marlene', 'Donnell', 'Delphine', 'Kendra', 'Sage', 'Macy', 'Sylvia', 'Boyd', 'Isabelle', 'Roberta', 'Hunter', 'Myrtie', 'Sharon', 'Kacey', 'Toney', 'Turner', 'Eliane', 'Austin', 'Billy', 'Cathrine', 'Jerod', 'Micheal', 'Tyreek', 'Alek', 'Fannie', 'Berniece', 'Blanche', 'Osvaldo', 'Adrienne', 'Riley', 'Colten', 'Ozzie', 'Carole', 'Magdalena', 'Shaun', 'Shany', 'Remington', 'Mariam', 'Brant', 'Mariano', 'Judson', 'Kenya', 'Evangeline', 'Brenden', 'Colton', 'Dejon', 'Kay', 'Raquel', 'Vinnie', 'Myra', 'Veda', 'Joelle', 'Delphine', 'Kellie', 'Edd', 'Lee', 'Misty', 'Ally', 'Salvatore', 'Eleazar', 'Loren', 'Ambrose', 'Kirstin', 'Heath', 'Tamia', 'Jon', 'Leslie', 'Keegan', 'Orlo', 'Haley', 'Loyal', 'Tillman', 'Esta', 'Sam', 'Roscoe', 'Katrina', 'Kyler', 'Brianne', 'Krystal', 'Stevie', 'Kiana', 'Jamaal', 'Agnes', 'Grayce', 'Abdul', 'Jerry', 'Easton', 'Alex', 'Nikki', 'Johanna', 'Otha', 'Deontae', 'Dwight', 'Brionna', 'Julius', 'Deborah', 'Alyson', 'Emilia', 'Pablo', 'Osborne', 'Titus', 'Jedediah', 'Giovani', 'Josefa', 'Major', 'Arno'];
var lastNameArray = ['Medici', 'Bowden', 'Con', 'Underwood', 'Hickey','Star','Mainwaring','Rund','Delaney','Jones','Muir','Swanson','Baxter','Linstrom','Hosie','Katz','Boyle','Wood','Matteson','Montgomery','Jackson','Baker','Murry','Smith','Adams','Cord','Johnson','Williams','Brown','Miller','Davis','Garcia','Rodriguez','Wilson','Martinez','Anderson','Taylor','Thomas','Hernandez','Moore','Martin','White','Lopez','Lee','Harris','Lewis','Walker','Perez','King','Hall','Hill','Campbell','Mitchell','Howard','Ward','Foster','Myers','Reyes','Fisher','Coleman','Simmons','Patterson','Ramos','Kim','Gutierrez','Jenkins','Ortiz','Bridges','Abbot','Boone','Sweeney','York','Farrell','Skinner','Franco','Combes','Whitaker','Morissette', 'Hilll', 'Bergnaum', 'Reynolds', 'Huels', 'Emard', 'Funk', 'Leannon', 'Cartwright', 'Keeling', 'Dickinson', 'Shanahan', 'Harvey', 'Schmitt', 'Beier', 'Hand', 'Jacobs', 'Leannon', 'Prohaska', 'Jaskolski', 'Windler', 'Schroeder','Satterfield', 'Reichel', 'Weissnat', 'Hermiston', 'Toy', 'McKenzie', 'Keeling', 'Dare', 'Rippin', 'Deckow', 'Wyman', 'Jenkins', 'Gibson', 'Boyer', 'Reichel', 'Deckow', 'Howell', 'Mosciski', 'Beier', 'Fadel', 'Bartell', 'Ritchie', 'Effertz', 'Cummings', 'Pfannerstill', 'Hermiston', 'Weber', 'Zboncak', 'Gerlach', 'Borer', 'Lehner', 'Daugherty', 'Hauck', 'Metz', 'Bogisich', 'Schuppe', 'Lind', 'Fahey', 'Spencer', 'Langosh', 'Kassulke', 'Hackett', 'Raynor', 'Price', 'Champlin', 'Hagenes', 'Greenfelder', 'Nicolas', 'Hoppe', 'Reilly', 'Abernathy', 'Zemlak', 'Schowalter', 'Daugherty', 'Koelpin', 'Howe', 'Homenick', 'Blanda', 'Luettgen', 'Steuber', 'Vandervort', 'Grady', 'Crona', 'Hoeger', 'Walsh', 'Hirthe', 'Schneider', 'Douglas', 'Kuphal', 'Larson', 'Torp', 'Rau', 'Walsh', 'Conroy', 'Torp', 'Schumm', 'Lakin', 'Mayer', 'Farrell', 'Fahey', 'Collins', 'Wisozk', 'Prohaska', 'Bayer', 'McKenzie', 'White', 'Kuhic', 'Rodriguez', 'Reinger', 'Deckow', 'Wilkinson','Halvorson', 'Heidenreich', 'Davis', 'Donnelly', 'Wunsch', 'Gibson', 'Bednar', 'Upton', 'Grimes', 'Frami', 'Hane', 'Rice', 'Schowalter', 'Bergnaum', 'Barrows', 'Corwin', 'Kuphal', 'Dooley', 'Bailey', 'Prosacco', 'Corwin', 'Baumbach', 'Boyle', 'Toy', 'Kertzmann', 'Kulas', 'Schamberger', 'Welch', 'Lang', 'Koss', 'Zieme', 'Becker', 'Jast', 'Mayert', 'Kihn', 'Schneider', 'Parisian', 'Daniel', 'Smith', 'Steuber', 'Welch', 'Dickens', 'Rosenbaum', 'Fahey', 'Ledner', 'Bogisich', 'Collier', 'Yundt', 'Champlin', 'Pagac', 'Gorczany', 'Kohler', 'Beier', 'Rice', 'Rau', 'Kulas', 'Farrell', 'Little', 'Stark', 'Stiedemann', 'Waters', 'Ryan', 'Skiles', 'Wolff', 'Harber', 'Emard', 'Hoppe', 'Graham', 'Anderson', 'Pfeffer', 'Labadie', 'Nikolaus', 'Herman', 'Stokes', 'West', 'Jacobs', 'Hermiston', 'Dickinson', 'Rau', 'Howell','Muller', 'Kihn', 'Morar', 'Batz', 'Parker', 'Stark', 'Dibbert', 'Gerlach', 'Pollich',  'Bartell', 'Hoppe', 'Fritsch', 'Watsica', 'Crooks', 'Pfeffer', 'Pfeffer', 'Lang', 'Gerhold', 'Herzog', 'Feeney', 'Lindgren', 'Jacobi', 'Dickinson', 'McCullough', 'Corkery', 'Lubowitz', 'Schmitt', 'Brown', 'Heller', 'Trantow', 'Blick', 'Schoen', 'Bergnaum', 'Bosco', 'Howell', 'Baumbach', 'Kassulke', 'Heaney', 'Johnson', 'Weissnat', 'Stehr', 'Lynch', 'Lemke', 'Leffler', 'Schumm', 'Rippin', 'Howell', 'Schroeder', 'Friesen', 'Carter', 'Ferry', 'Heaney', 'Smitham', 'Gorczany', 'Batz', 'Mills', 'Bosco', 'Hauck', 'Smith', 'McCullough', 'Zboncak', 'Nolan', 'Howe', 'Hamill', 'Nolan', 'Fadel', 'Littel', 'Ritchie', 'Lind', 'Torphy', 'Lockman', 'Cummings', 'McLaughlin', 'Durgan', 'Gorczany', 'Beatty', 'Carter', 'Walter', 'Hoeger', 'Johns', 'Terry', 'Kihn', 'Corkery', 'Franecki', 'Nitzsche', 'Koelpin', 'Parker', 'Mayer', 'Dickens', 'Schoen', 'Tremblay', 'Balistreri', 'Donnelly', 'Schimmel', 'Prohaska', 'Stroman', 'Hayes', 'Dare', 'Gerhold', 'Christiansen', 'Christiansen', 'Tromp', 'Hand', 'Waelchi', 'Rosenbaum', 'Heathcote', 'Conn', 'Rice', 'Morissette', 'Renner', 'Schultz', 'Farrell', 'Fay', 'Braun', 'Bartell', 'Miller', 'Lemke', 'Ward', 'Nienow', 'Reilly', 'Torphy', 'Goyette', 'Ankunding', 'Swaniawski', 'Daniel', 'Berge', 'Abbott', 'Ritchie', 'Jakubowski', 'Lebsack', 'Pacocha', 'Hintz', 'Denesik', 'Runolfsdottir', 'Padberg', 'Marks', 'Beier', 'Runolfsdottir', 'Brown', 'Wehner', 'Kozey', 'Walker', 'Sawayn', 'Bartoletti', 'Emmerich', 'Bode', 'Vandervort', 'Mayert', 'Hagenes', 'Ullrich', 'Deckow', 'Simonis', 'Heaney', 'Feeney', 'Altenwerth', 'Schowalter', 'Graham', 'Hudson', 'Paucek', 'Volkman', 'Wilkinson', 'Muller', 'Jones', 'Adams', 'Armstrong', 'Thompson', 'Nitzsche', 'Nicolas', 'Runte', 'Graham', 'Bernhard', 'Reilly', 'Huel', 'Williamson', 'Krajcik', 'Lang', 'Koelpin', 'Zieme', 'Becker', 'Herman', 'Herman', 'Crist', 'Kovacek', 'Grimes', 'Raynor', 'Hyatt', 'Braun', 'Emmerich', 'McDermott', 'Von', 'Roob', 'Purdy', 'Osinski', 'Bergstrom', 'Bayer', 'Kuhic',];
var leadStatus = ['Open','Closed','In Progress'];
var leadSource = ['Mobile App','Website','Branch','ATM','Email'];
var leadType = ['Credit Card','Checking Account','Savings Account','Debit/Pre-Paid','Foreign Exchange'];







function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(pastorfuture){
	if (pastorfuture == 'future'){
		return Date.today().add(getRandomInt(0,500)).day().toString('MM/dd/yyyy');
	}
	if (pastorfuture == 'past'){
		return Date.today().add(-getRandomInt(0,500)).day().toString('MM/dd/yyyy');
	}
}

function getRandomArrayValue(array){
	return array[getRandomInt(0,array.length-1)];
};

function getRandomLeadData(){
	var m = 2;
	for (var i = 0; i < 100; i++) {
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
			lastContacted: getRandomDate('past'),
			lastActivity: getRandomDate('past'),
			products:'Credit, Checking',
			}
		);
	}
}
function getRandomOpptyData(){
	var m = 2;
	for (var i = 0; i < 100; i++) {
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
			lastContacted: getRandomDate('past'),
			lastActivity: getRandomDate('past'),
			products:'Credit, Checking',
			}
		);
	}
}

var rbDB = new localStorageDB('rb', localStorage);
if(rbDB.isNew()){
	// create the "client" data
	var rows = [
		{uid: 'C001', firstName: 'Rachel', lastName:'Adams'},
		{uid: 'C002', firstName: 'Sarah', lastName:'Bui'},
	];
	// create the "client" table
	rbDB.createTableWithData('client', rows);
	
	// create the "prospect" data
	var rows = [
		{uid: 'P001', name: 'P Baun'},
		{uid: 'P002', name: 'P Pab'},
	];
	// create the "prospect" table
	rbDB.createTableWithData('prospect', rows);

	// create the "financialAccount" data
	var rows = [
		{uid: 'FA001', accountType: 'credit', role:'owner', accountId:'120934884', openingDate:'5/8/2012', balance:'250,465.25', status:'Good'},
		{uid: 'FA002', accountType: 'mortgage', role:'owner', accountId:'120934234', openingDate:'6/8/2012', balance:'234,543', status:'Good'},
		{uid: 'FA003', accountType: 'checking', role:'owner', accountId:'734950645', openingDate:'7/8/2012', balance:'80,435', status:'Good'},
		{uid: 'FA004', accountType: 'credit', role:'owner', accountId:'647920583', openingDate:'8/8/2012', balance:'9,340', status:'Average'},
		{uid: 'FA005', accountType: 'checking', role:'owner', accountId:'758930572', openingDate:'9/8/2012', balance:'10,342', status:'Poor'},
	];
	// create the "financialAccount" table
	rbDB.createTableWithData('financialAccount', rows);

	// create the "application" data
	var rows = [
		{uid: 'A001', name: 'P Baun'}
	];
	// create the "application" table
	rbDB.createTableWithData('application', rows);

	// create the "opportunity" data
	var rows = [
		{uid: 'O001', 
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
		lastContacted: getRandomDate('past'),
		lastActivity: getRandomDate('past'),
		products:'Credit, Checking',
		}
	];
	// create the "opportunity" table
	rbDB.createTableWithData('opportunity', rows);

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
		lastContacted: getRandomDate('past'),
		lastActivity: getRandomDate('past'),
		products:'Credit, Checking',
	}];
	// create the "lead" table
	rbDB.createTableWithData('lead', rows);
	// add Random Lead Data
	getRandomLeadData();

	// create the "financialGoals" data
	var rows = [
		{uid: 'FG001', name: 'P Baun'}
	];
	// create the "financialGoals" table
	rbDB.createTableWithData('financialGoals', rows);

	// create the "accountRelationships" data
	var rows = [
		{uid: 'AR001', name: 'P Baun'}
	];
	// create the "accountRelationships" table
	rbDB.createTableWithData('accountRelationships', rows);

	// create the "employeeProfile" data
	var rows = [
		{uid: 'EP001', name: 'P Baun'}
	];
	// create the "employeeProfile" table
	rbDB.createTableWithData('employeeProfile', rows);

	// create the "leadRanking" data
	var rows = [
		{uid: 'LR001', name: 'P Baun'}
	];
	// create the "leadRanking" table
	rbDB.createTableWithData('leadRanking', rows);




	// create the "xref" data
	var rows = [
		{pid: 'C001', object: 'financialAccount', cid:'FA001'},
		{pid: 'C001', object: 'financialAccount', cid:'FA002'},
		{pid: 'C001', object: 'financialAccount', cid:'FA003'},
		{pid: 'C002', object: 'financialAccount', cid:'FA004'},
		{pid: 'C002', object: 'financialAccount', cid:'FA005'},
	];
	// create the "leadRanking" table
	rbDB.createTableWithData('xref', rows);

	// commit the database to localStorage
    // all create/drop/insert/update/delete operations should be committed
	rbDB.commit();
}


var queryResult = rbDB.queryAll("client");

var queryResult2 = rbDB.queryAll("lead");
 
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


$(document).ready( function(){
	queryResult.forEach(function(datum) {
		$('#main-tab-content-details').prepend('<div>'+datum.uid+': '+datum.firstName+'</div>')
	});

	queryResult1.forEach(function(datum) {
		$('#main-tab-content-details').prepend('<div>'+datum.pid+': '+datum.object+': '+datum.cid+'</div>')
	});


});


/*  MODAL */
$(document).ready( function(){

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
				modalContent = '<div class="slds-grid slds-wrap"> <div class="slds-size--1-of-2 slds-p-right--x-small slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">First Name</span> <input class="slds-input" type="text" /> </label> </div> <div class="slds-size--1-of-2 slds-p-left--x-small slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">Last Name</span> <input class="slds-input" type="text" /> </label> </div> <div class="slds-size--1-of-1 slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">Role</span> <input class="slds-input" type="text" /> </label> </div> <div class="slds-size--1-of-2 slds-p-right--x-small slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">End Date</span> <div class="slds-input-has-icon slds-input-has-icon--right slds-dropdown-trigger" style="display:block;"> <svg aria-hidden="true" class="slds-input__icon"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event"></use> </svg> <input class="slds-input" type="text" value="6/23/15" /> <!-- Begin Datepicker --> <div class="slds-dropdown slds-dropdown--left slds-datepicker" style="position:fixed; left:1rem;" aria-hidden="false" data-selection="multi"> <div class="slds-datepicker__filter slds-grid"> <div class="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--3-of-4"> <div class="slds-align-middle"> <button class="slds-button slds-button--icon-container"> <svg aria-hidden="true" class="slds-button__icon slds-button__icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use> </svg> <span class="slds-assistive-text">Previous Month</span> </button> </div> <h2 id="month" class="slds-align-middle" aria-live="assertive" aria-atomic="true">June</h2> <div class="slds-align-middle"> <button class="slds-button slds-button--icon-container"> <svg aria-hidden="true" class="slds-button__icon slds-button__icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use> </svg> <span class="slds-assistive-text">Next Month</span> </button> </div> </div> <div class="slds-picklist datepicker__filter--year slds-shrink-none"> <button id="year" class="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true">2015 <svg aria-hidden="true" class="slds-icon slds-icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use> </svg> </button> </div> </div> <table class="datepicker__month" role="grid" aria-labelledby="month"> <thead> <tr id="weekdays"> <th id="Sunday"> <abbr title="Sunday">S</abbr> </th> <th id="Monday"> <abbr title="Monday">M</abbr> </th> <th id="Tuesday"> <abbr title="Tuesday">T</abbr> </th> <th id="Wednesday"> <abbr title="Wednesday">W</abbr> </th> <th id="Thursday"> <abbr title="Thursday">T</abbr> </th> <th id="Friday"> <abbr title="Friday">F</abbr> </th> <th id="Saturday"> <abbr title="Saturday">S</abbr> </th> </tr> </thead> <tbody> <tr> <td class="slds-disabled-text" headers="Sunday" role="gridcell" aria-disabled="true"> <span class="slds-day">31</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">1</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">2</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">3</span> </td> <td headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">4</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">5</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">6</span> </td> </tr> <tr> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">7</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">8</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">9</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">10</span> </td> <td headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">11</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">12</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">13</span> </td> </tr> <tr> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">14</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">15</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">16</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">17</span> </td> <td class="slds-is-today" headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">18</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">19</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">20</span> </td> </tr> <tr class="slds-has-multi-row-selection"> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">21</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">22</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Tuesday" role="gridcell" aria-selected="true"> <span class="slds-day">23</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Wednesday" role="gridcell" aria-selected="true"> <span class="slds-day">24</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Thursday" role="gridcell" aria-selected="true"> <span class="slds-day">25</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">26</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">27</span> </td> </tr> <tr class="slds-has-multi-row-selection"> <td class="slds-is-selected slds-is-selected-multi" headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">28</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">29</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">30</span> </td> <td class="slds-disabled-text" headers="Wednesday" role="gridcell" aria-disabled="true"> <span class="slds-day">1</span> </td> <td class="slds-disabled-text" headers="Thursday" role="gridcell" aria-disabled="true"> <span class="slds-day">2</span> </td> <td class="slds-disabled-text" headers="Friday" role="gridcell" aria-disabled="true"> <span class="slds-day">3</span> </td> <td class="slds-disabled-text" headers="Saturday" role="gridcell" aria-disabled="true"> <span class="slds-day">4</span> </td> </tr> </tbody> </table> </div> <!-- End Datepicker --> </div> </label> </div> <div class="slds-size--1-of-2 slds-p-left--x-small slds-p-bottom--small"> <label class="slds-form-element__control"> <span class="slds-form-element__helper">Start Date</span> <div class="slds-input-has-icon slds-input-has-icon--right slds-dropdown-trigger" style="display:block;"> <svg aria-hidden="true" class="slds-input__icon"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event"></use> </svg> <input class="slds-input" type="text" value="6/29/15" /> <!-- Begin Datepicker --> <div class="slds-dropdown slds-dropdown--left slds-datepicker" style="position:fixed; left:51%;" aria-hidden="false" data-selection="multi"> <div class="slds-datepicker__filter slds-grid"> <div class="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--3-of-4"> <div class="slds-align-middle"> <button class="slds-button slds-button--icon-container"> <svg aria-hidden="true" class="slds-button__icon slds-button__icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use> </svg> <span class="slds-assistive-text">Previous Month</span> </button> </div> <h2 id="month" class="slds-align-middle" aria-live="assertive" aria-atomic="true">June</h2> <div class="slds-align-middle"> <button class="slds-button slds-button--icon-container"> <svg aria-hidden="true" class="slds-button__icon slds-button__icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use> </svg> <span class="slds-assistive-text">Next Month</span> </button> </div> </div> <div class="slds-picklist datepicker__filter--year slds-shrink-none"> <button id="year" class="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true">2015 <svg aria-hidden="true" class="slds-icon slds-icon--small"> <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use> </svg> </button> </div> </div> <table class="datepicker__month" role="grid" aria-labelledby="month"> <thead> <tr id="weekdays"> <th id="Sunday"> <abbr title="Sunday">S</abbr> </th> <th id="Monday"> <abbr title="Monday">M</abbr> </th> <th id="Tuesday"> <abbr title="Tuesday">T</abbr> </th> <th id="Wednesday"> <abbr title="Wednesday">W</abbr> </th> <th id="Thursday"> <abbr title="Thursday">T</abbr> </th> <th id="Friday"> <abbr title="Friday">F</abbr> </th> <th id="Saturday"> <abbr title="Saturday">S</abbr> </th> </tr> </thead> <tbody> <tr> <td class="slds-disabled-text" headers="Sunday" role="gridcell" aria-disabled="true"> <span class="slds-day">31</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">1</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">2</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">3</span> </td> <td headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">4</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">5</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">6</span> </td> </tr> <tr> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">7</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">8</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">9</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">10</span> </td> <td headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">11</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">12</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">13</span> </td> </tr> <tr> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">14</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">15</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">16</span> </td> <td headers="Wednesday" role="gridcell" aria-selected="false"> <span class="slds-day">17</span> </td> <td class="slds-is-today" headers="Thursday" role="gridcell" aria-selected="false"> <span class="slds-day">18</span> </td> <td headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">19</span> </td> <td headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">20</span> </td> </tr> <tr class="slds-has-multi-row-selection"> <td headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">21</span> </td> <td headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">22</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Tuesday" role="gridcell" aria-selected="true"> <span class="slds-day">23</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Wednesday" role="gridcell" aria-selected="true"> <span class="slds-day">24</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Thursday" role="gridcell" aria-selected="true"> <span class="slds-day">25</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Friday" role="gridcell" aria-selected="false"> <span class="slds-day">26</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Saturday" role="gridcell" aria-selected="false"> <span class="slds-day">27</span> </td> </tr> <tr class="slds-has-multi-row-selection"> <td class="slds-is-selected slds-is-selected-multi" headers="Sunday" role="gridcell" aria-selected="false"> <span class="slds-day">28</span> </td> <td class="slds-is-selected slds-is-selected-multi" headers="Monday" role="gridcell" aria-selected="false"> <span class="slds-day">29</span> </td> <td headers="Tuesday" role="gridcell" aria-selected="false"> <span class="slds-day">30</span> </td> <td class="slds-disabled-text" headers="Wednesday" role="gridcell" aria-disabled="true"> <span class="slds-day">1</span> </td> <td class="slds-disabled-text" headers="Thursday" role="gridcell" aria-disabled="true"> <span class="slds-day">2</span> </td> <td class="slds-disabled-text" headers="Friday" role="gridcell" aria-disabled="true"> <span class="slds-day">3</span> </td> <td class="slds-disabled-text" headers="Saturday" role="gridcell" aria-disabled="true"> <span class="slds-day">4</span> </td> </tr> </tbody> </table> </div> <!-- End Datepicker --> </div> </label> </div> </div>';
				modalFooter = '<button class="slds-button slds-button--neutral modal-action">Cancel</button> <button class="slds-button slds-button--neutral slds-button--brand modal-action">Save</button>';
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