// Ionic Starter App

// database is global
var db = null;

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngCordova', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(window.cordova){
      // app syntax
      db = $cordovaSQLite.openDB("my.db");
    } else {
      // ionic serve syntax
      db = window.openDatabase("my.db", "1.0", "starter", -1)
    }
    // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS restaurant (id integer primary key, name text) CREATE TABLE IF NOT");
    create(db);

  });

})

function create(db){


  // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS restaurant (id integer primary key, name text),
  //   CREATE TABLE IF NOT EXISTS test (id integer primary key, name text)");

  var test = ["CREATE TABLE IF NOT EXISTS restaurant (id integer primary key, name text)", "CREATE TABLE IF NOT EXISTS test (id integer primary key, name text)"];

  for (i = 0; i < test.length; i++) { 
    $cordovaSQLite.execute(db, test[i]);
  }

  // $cordovaSQLite.execute(db, "CREATE TABLE RESTAURANT( ID INTEGER PRIMARY KEY NOT NULL, PROPERTYID INT NOT NULL, NAME TEXT NOT NULL, ADDRESS TEXT NOT NULL, OWNERID INT NOT NULL, PERSONINCHARGE TEXT NOT NULL, FOREIGN KEY(PROPERTYID) REFERENCES PROPERTY(ID), FOREIGN KEY(OWNERID) REFERENCES OWNER(ID), FOREIGN KEY(ID) REFERENCES RESTAURANTINSPECTIONS(RESTAURANTID))");
  // $cordovaSQLite.execute(db, "CREATE TABLE SEPTIC( ID INTEGER PRIMARY KEY NOT NULL, PROPERTYID INT NOT NULL, OWNERID INT NOT NULL, FOREIGN KEY(PROPERTYID) REFERENCES PROPERTY(ID), FOREIGN KEY(ID) REFERENCES SYSTEMPUMPINGRECORD(SEPTICID), FOREIGN KEY(ID) REFERENCES SEPTICINSPECTIONS(SEPTICID), FOREIGN KEY(OWNERID) REFERENCES OWNER(ID), FOREIGN KEY(OWNERID) REFERENCES OWNER(ID))");
  // $cordovaSQLite.execute(db, "CREATE TABLE WELL( ID INTEGER PRIMARY KEY NOT NULL, PROPERTYID INT NOT NULL, OWNERID INT NOT NULL, FOREIGN KEY(PROPERTYID) REFERENCES PROPERTY(ID), FOREIGN KEY(ID) REFERENCES WATERQUALITYREPORT(WELLID), FOREIGN KEY(OWNERID) REFERENCES OWNER(ID))");
  // $cordovaSQLite.execute(db, "CREATE TABLE OWNER(ID INTEGER PRIMARY KEY NOT NULL, OWNERNAME TEXT NOT NULL, TELEPHONENUMBER TEXT NOT NULL)");
  // $cordovaSQLite.execute(db, "CREATE TABLE PROPERTY( ID INTEGER PRIMARY KEY NOT NULL, GPSCOORDINATES REAL NOT NULL, ADDRESS TEXT NOT NULL, TOWN TEXT NOT NULL, STATE TEXT NOT NULL, ZIPCODE INT NOT NULL, PLOTNUMER INT NOT NULL, FOREIGN KEY(ID) REFERENCES WELL(PROPERTYID), FOREIGN KEY(ID) REFERENCES RESTAURANT(PROPERTYID), FOREIGN KEY(ID) REFERENCES SEPTIC(PROPERTYID)");
  // $cordovaSQLite.execute(db, "CREATE TABLE RESTAURANTINSPECTIONS( ID INTEGER PRIMARY KEY NOT NULL, RESTAURANTID INT NOT NULL, INSPECTOR TEXT NOT NULL, RISKLEVEL TEXT NOT NULL, HACCP INTEGER NOT NULL, TIMEIN INTEGER NOT NULL, TIMEOUT INTEGER NOT NULL, TYPEOFOPERATION INTEGER NOT NULL, TYPEOFINSPECTION INTEGER NOT NULL, PREVIOUSINSPECTIONDATE INTEGER, REASONING INTEGER NOT NULL, OTHERREASONING TEXT, MANAGEMENTANDPERSONNEL TEXT, FOODANDFOODPROTECTION TEXT, EQUIPMENTANDUTENSILS TEXT, WATERPLUMBINGANDWASTE TEXT, PHYSICALFACILITY TEXT, POISONOUSORTOXICMATERIALS TEXT, SPECIALREQUIREMENTS TEXT, OTHER0 TEXT, DISCUSSIONWITHPERSONINCHARGE TEXT, CORRECTIVEACTIONREQUIRED INT, VOLUNTARYCOMPLIANCE INT, REINSPECTIONSCHEDULED INT, VOLUNTARYDISPOSAL INT, EMPLOYEERESTRICTIONEXCLUSION INT, EMERGENCYSUSPENSION INT, EMERGENCYCLOSURE INT, OTHER1 INT, ADDITIONALNOTES TEXT, FOREIGN KEY(TYPEOFOPERATION) REFERENCES TYPEOFOPERATION(ID), FOREIGN KEY(TYPEOFINSPECTION) REFERENCES TYPEOFINSPECTION(ID), FOREIGN KEY(REASONING) REFERENCES REASONING(ID), FOREIGN KEY(ID) REFERENCES VIOLATIONS(RESTAURANTINSPECTIONID)");
  // $cordovaSQLite.execute(db, "CREATE TABLE TYPEOFOPERATION( ID INTEGER PRIMARY KEY NOT NULL, OPERATIONTYPE TEXT NOT NULL");
  // $cordovaSQLite.execute(db, "CREATE TABLE TYPEOFINSPECTION( ID INTEGER PRIMARY KEY NOT NULL, INSPECTIONTYPE TEXT NOT NULL" );
  // $cordovaSQLite.execute(db, "CREATE TABLE REASONING( ID INTEGER PRIMARY KEY NOT NULL, REASONING TEXT NOT NULL" );
  // $cordovaSQLite.execute(db, "CREATE TABLE SYSTEMPUMPINGRECORD( ID INTEGER PRIMARY KEY NOT NULL, SEPTICID INT NOT NULL, PUMPINGDATE REAL NOT NULL, QUANTITYPUMPED REAL NOT NULL, COMPONENT INT NOT NULL, SYSTEMQUALITYOTHER TEXT NOT NULL, EFFLUENTTEEFILTERPRESENT INT NOT NULL, IFYESWASITCLEANED INT NOT NULL, OBSERVEDCONDITION TEXT NOT NULL, SYSTEMPUMPEDBYNAME TEXT NOT NULL, SYSTEMPUMPEDBYLICENSE TEXT NOT NULL, SYSTEMPUMPEDBYCOMPANY TEXT NOT NULL, LOCATIONWHERECONTENTSWEREDISPOSED TEXT NOT NULL, HAULER TEXT NOT NULL, HAULERDATE TEXT NOT NULL, RECEIVINGFACILITY TEXT NOT NULL, RECEIVINGFACILITYDATE TEXT NOT NULL, FOREIGN KEY(SEPTICID) REFERENCES SEPTIC(ID), FOREIGN KEY(COMPONENT) REFERENCES SEPTICPUMPINGRECORD(ID)" );
  // $cordovaSQLite.execute(db, "CREATE TABLE SEPTICPUMPINGRECORD( ID INTEGER PRIMARY KEY NOT NULL, OPTION TEXT NOT NULL , FOREIGN KEY(ID) REFERENCES SYSTEMPUMPINGRECORDS(COMPONENT)");
  // $cordovaSQLite.execute(db, "CREATE TABLE VIOLATIONS( ID INTEGER PRIMARY KEY NOT NULL, RESTAURANTINSPECTIONID INT NOT NULL, CODEREFERENCE TEXT NOT NULL, CRITICALORREDITEM TEXT NOT NULL, DESCRIPTIONOFVIOLATIONCORRECTIONPLAN TEXT NOT NULL, DATEVERIFIED TEXT NOT NULL, FOREIGN KEY(RESTAURANTINSPECTIONID) REFERENCES RESTAURANTINSPECTIONS(ID)");
  // $cordovaSQLite.execute(db, "CREATE TABLE PRIVILEGES( ID INTEGER PRIMARY KEY NOT NULL, PRIVILEGELEVEL INT NOT NULL, USERID INT NOT NULL, FOREIGN KEY(USERID) references USER(ID)" );
  // $cordovaSQLite.execute(db, "CREATE TABLE USER( ID INTEGER PRIMARY KEY NOT NULL, USERNAME TEXT NOT NULL, PASSWORDHASH NOT NULL, FOREIGN KEY(ID) references SAVEDSEARCHES(USERID), FOREIGN KEY(ID) references PRIVILEGES(USERID)")
  // $cordovaSQLite.execute(db, "CREATE TABLE SAVEDSEARCHES( ID INTEGER PRIMARY KEY NOT NULL, USERID INT NOT NULL, SAVEDSEARCH TEXT NOT NULL, FOREIGN KEY(USERID) references USER(ID)" );
  // $cordovaSQLite.execute(db, "CREATE TABLE WATERQUALITYREPORT( ID INTEGER PRIMARY KEY NOT NULL, WELLID INT NOT NULL, CLIENTNAME TEXT NOT NULL, COLLECTEDBY TEXT NOT NULL, PROJECTNAME TEXT NOT NULL, PROJECTNUMBER TEXT NOT NULL, DATECOLLECTED INT NOT NULL, SAMPLEIDENTIFICATION TEXT NOT NULL, LABNUMBER REAL NOT NULL, TOTALCOLIFORMBACTERIA REAL NOT NULL, TOTALCOLIFORMBACTERIAUNITS TEXT NOT NULL, NITRATENITROGEN REAL NOT NULL, NITRATENITROGENUNITS TEXT NOT NULL, PH REAL NOT NULL, PHUNITS TEXT NOT NULL, IRON REAL NOT NULL, IRONUNITS TEXT NOT NULL, HARDNESSASCACO3 REAL NOT NULL, HARDNESSASCACO3UNITS TEXT NOT NULL, SULFATESULFUR REAL NOT NULL, SULFATESULFUREUNITS TEXT NOT NULL, CHLORIDE REAL NOT NULL, SPECIFICCONDUCTANCE REAL NOT NULL, SPECIFICCONDUCTANCEUNITS TEXT NOT NULL, THISWATERSAMPLEPASSESDRINKINGWATERSTANDARDS INT NOT NULL, SUBMITTEDBY TEXT NOT NULL, ADDITIONALNOTES TEXT, FOREIGN KEY(WELLID) REFERENCES WELL(ID) );
  // $cordovaSQLite.execute(db, "CREATE TABLE SEPTICINSPECTION( ID INTEGER PRIMARY KEY NOT NULL, SEPTICID INT NOT NULL, NAMEOFINSPECTOR TEXT NOT NULL, COMPANYNAME TEXT NOT NULL, COMPANYADDRESS TEXT NOT NULL, CITY TEXT NOT NULL, STATE TEXT NOT NULL, ZIPCODE INTEGER NOT NULL, TELEPHONENUMBER TEXT NOT NULL, LICENSENUMBER TEXT NOT NULL, DEPAPPROVAL INTEGER NOT NULL, SYSTEMPASSES INTEGER, SYSTEMPASSESCOMMENTS TEXT, SYSTEMCONDITIONALLYPASSES INTEGER, SYSTEMCONDITIONALLYPASSESWILLPASSIFREPLACED INTEGER, SYSTEMCONDITIONALLYPASSESCOMMENTS TEXT, SYSTEMCONDITIONALLYPASSESALARMS INTEGER, SYSTEMCONDITIONALLYPASSESSEWAGE INTEGER, SYSTEMCONDITIONALLYPASSESSEWAGEPIPE INTEGER, SYSTEMCONDITIONALLYPASSESSEWAGEPIPECOMMENTS TEXT, SYSTEMCONDITIONALLYPASSESSEWAGEOBSTRUCTION INTEGER, SYSTEMCONDITIONALLYPASSESSEWAGEOBSTRUCTIONCOMMENTS TEXT, SYSTEMCONDITIONALLYPASSESSEWAGEDISTRIBUTION INTEGER, SYSTEMCONDITIONALLYPASSESSEWAGEDISTRIBUTIONCOMMENTS TEXT, SYSTEMCONDITIONALLYPASSESFOURPUMPS INTEGER, SYSTEMCONDITIONALLYPASSESFOURPUMPSPIPE INTEGER, SYSTEMCONDITIONALLYPASSESFOURPUMPSPIPECOMMENTS TEXT, SYSTEMCONDITIONALLYPASSESFOURPUMPSOBSTRUCTION INTEGER, SYSTEMCONDITIONALLYPASSESFOURPUMPSOBSTRUCTIONCOMMENTS TEXT, FURTHEREVALUATION INTEGER, FURTHEREVALUATIONSYSTEMWILLPASSIF INTEGER, FURTHEREVALUATIONSYSTEMWILLFAILIF INTEGER, FURTHEREVALUATIONFIFTYTOONEHUNDRED INTEGER, FURTHEREVALUATIONMETHODUSEDTODETERMINE TEXT, FURTHEREVALUATIONCOMMENTS TEXT, SYSTEMFAILUREBACKUP INTEGER, SYSTEMFAILUREDISCHARGE INTEGER, SYSTEMFAILURESTATICLIQUID INTEGER, SYSTEMFAILURELIQUIDDEPTH INTEGER, SYSTEMFAILUREREQUIREDPUMPING INTEGER, SYSTEMFAILUREBELOWHIGHGROUNDWATER INTEGER, SYSTEMFAILURESURFACEWATERSUPPLY INTEGER, SYSTEMFAILUREPUBLIC INTEGER, SYSTEMFAILUREPRIVATE INTEGER, SYSTEMFAILUREPRIVATEGREATER INTEGER, SYSTEMFAILUREGPD INTEGER, SYSTEMFAILUREFORREAL INTEGER, LARGESYSTEMSSURFACEDRINKING INTEGER, LARGESYSTEMSTRIBUTARY INTEGER, LARGESYSTEMSNITROGEN INTEGER, CHECKLISTINFORMATIONPROVIDED INTEGER, CHECKLISTPUMPEDOUTTWOWEEKS INTEGER, CHECKLISTNORMALFLOW INTEGER, CHECKLISTLARGEVOLUMESINTRODUCED INTEGER, CHECKLISTPLANSEXAMINED INTEGER, CHECKLISTBACKUPINSPECTED INTEGER, CHECKLISTBREAKOUTINSPECTED INTEGER, CHECKLISTCOMPONENTSONSITE INTEGER, CHECKLISTINTERIORINSPECTION INTEGER, CHECKLISTFACILITYOWNER INTEGER, CHECKLISTEXISTINGINFORMATION INTEGER, CHECKLISTDETERMINED INTEGER, RESIDENTIALBEDROOMSDESIGN INTEGER, RESIDENTIALBEDROOMSACTUAL INTEGER, RESIDENTIALDESIGNFLOW INTEGER, RESIDENTIALCOMMENTS TEXT, RESIDENTIALRESIDENTS INTEGER, RESIDENTIALGARBAGEGRINDER INTEGER, RESIDENTIALLAUNDRYSEPARATE INTEGER, RESIDENTIALLAUNDRYINSPECTION INTEGER, RESIDENTIALSEASONALUSE INTEGER, RESIDENTIALWATERMETERREADINGS INTEGER, RESIDENTIALWATERMETERCOMMENTS TEXT, RESIDENTIALSUMPPUMP INTEGER, RESIDENTIALDATEOFOCCUPANCY INTEGER, COMMERCIALTYPE TEXT, COMMERCIALDESIGNFLOW INTEGER, COMMERCIALBASISOFDESIGNFLOW TEXT, COMMERCIALGREASETRAP INTEGER, COMMERCIALINDUSTRIALWASTE INTEGER, COMMERCIALWASTEDISCHARGE INTEGER, COMMERCIALWATERMETERREADINGS TEXT, COMMERCIALDATEOFOCCUPANCY INTEGER, COMMERCIALCOMMENTS TEXT, GENERALSOURCE TEXT, GENERALPUMPED INTEGER, GENERALVOLUMEPUMPED INTEGER, GENERALQUANTITYDETERMINED TEXT, GENERALREASONFORPUMPED TEXT GENERALTYPEOFSYSTEM INTEGER, GENERALTYPEOFSYSTEMCOMMENT TEXT, GENERALCOMPONENTAGE INTEGER, GENERALCOMPONENTDATE INTEGER, GENERALCOMPONENTSOURCE TEXT, GENERALSEWAGEODORS INTEGER, BUILDINGSEWERDEPTHBELOWGRADE INTEGER, BUILDINGSEWERMATERIAL INTEGER, BUILDINGSEWERMATERIALCOMMENT TEXT, BUILDINGSEWERDISTANCEFROMPRIVATE INTEGER, BUILDINGSEWERCOMMENTS TEXT, SEPTICTANKDEPTHBELOWGRADE INTEGER, SEPTICTANKMATERIAL INTEGER, SEPTICTANKMATERIALCOMMENT TEXT, SEPTICTANKMETALAGE INTEGER, SEPTICTANKCOMPLIANCE INTEGER, SEPTICTANKDIMENSIONS TEXT, SEPTICTANKSLUDGEDEPTH INTEGER, SEPTICTANKDISTANCEFROMTOPOFSLUDGE INTEGER, SEPTICTANKSCUMTHICKNESS INTEGER, SEPTICTANKDISTANCEFROMTOPOFSCUM INTEGER, SEPTICTANKDISTANCEFROMBOTTOMOFSCUM INTEGER, SEPTICTANKDIMENSIONSOBTAINED TEXT, SEPTICTANKCOMMENTS TEXT, GREASETRAPDEPTHBELOWGRADE INTEGER, GREASETRAPMATERIAL INTEGER, GREASETRAPMATERIALCOMMENT TEXT, GREASETRAPDIMENSIONS TEXT, GREASETRAPSCUMTHICKNESS INTEGER, GREASETRAPDISTANCEFROMTOPOFSCUM INTEGER, GREASETRAPDISTANCEFROMBOTTOMOFSCUM INTEGER, GREASETRAPDATEOFLASTPUMPING INTEGER, GREASETRAPCOMMENTS TEXT, TIGHTORHOLDINGTANKDEPTHBELOWGRADE INTEGER, TIGHTORHOLDINGTANKMATERIAL INTEGER, TIGHTORHOLDINGTANKMATERIALCOMMENT TEXT, TIGHTORHOLDINGTANKDIMENSIONS TEXT, TIGHTORHOLDINGTANKCAPACITY INTEGER, TIGHTORHOLDINGTANKDESIGNFLOW INTEGER, TIGHTORHOLDINGTANKALARMPRESENT INTEGER, TIGHTORHOLDINGTANKALARMLEVEL TEXT, TIGHTORHOLDINGTANKALARMWORKING INTEGER, TIGHTORHOLDINGTANKDATEOFLASTPUMPING INTEGER, TIGHTORHOLDINGTANKCOMMENTS TEXT, DISTRIBUTIONBOXDEPTHOFLIQUID INTEGER, DISTRIBUTIONBOXCOMMENTS TEXT, PUMPCHAMBERPUMPSWORK INTEGER, PUMPCHAMBERALARMWORK INTEGER, PUMPCHAMBERCOMMENTS TEXT, SOILABSORPTIONSYSTEMCOMMENTS INTEGER, SOILABSORPTIONLEACHINGPITS INTEGER, SOILABSORPTIONLEACHINGPITSNUMBER INTEGER, SOILABSORPTIONLEACHINGCHAMBERS INTEGER, SOILABSORPTIONLEACHINGCHAMBERSNUMBER INTEGER, SOILABSORPTIONLEACHINGGALLERIES INTEGER, SOILABSORPTIONLEACHINGGALLERIESNUMBER INTEGER, SOILABSORPTIONLEACHINGTRENCHES INTEGER, SOILABSORPTIONLEACHINGTRENCHESNUMBER INTEGER, SOILABSORPTIONLEACHINGTRENCHESLENGTH INTEGER, SOILABSORPTIONLEACHINGFIELDS INTEGER, SOILABSORPTIONLEACHINGFIELDSNUMBER INTEGER, SOILABSORPTIONLEACHINGFIELDSDIMENSION TEXT, SOILABSORPTIONOVERFLOWCESSPOOL INTEGER, SOILABSORPTIONOVERFLOWCESSPOOLNUMBER INTEGER, SOILABSORPTIONINNOVATIVE INTEGER, SOILABSORPTIONINNOVATIVENAME TEXT, SOILABSORPTIONCOMMENTS TEXT, CESSPOOLSNUMBER INTEGER, CESSPOOLSCONFIGURATION TEXT, CESSPOOLSDEPTHTOP INTEGER, CESSPOOLSDEPTHSOLID INTEGER, CESSPOOLSDEPTHSCUM INTEGER, CESSPOOLSDIMENSION TEXT, CESSPOOLSMATERIAL TEXT, CESSPOOLSINDICATIONOFGROUNDWATER INTEGER, CESSPOOLSCOMMENTS TEXT, PRIVYMATERIAL TEXT, PRIVYDIMENSIONS TEXT, PRIVYDEPTHOFSOLIDS INTEGER, PRIVYCOMMENTS TEXT, SITEEXAMCHECKSLOPE INTEGER, SITEEXAMSURFACEWATER INTEGER, SITEEXAMCHECKCELLAR INTEGER, SITEEXAMSHALLOWWELLS INTEGER, SITEEXAMDEPTHTOHIGHGROUNDWATER INTEGER, SITEEXAMMETHODSDESIGNPLANS INTEGER, SITEEXAMMETHODSDESIGNPLANSDATE INTEGER, SITEEXAMMETHODSOBSERVEDSITE INTEGER, SITEEXAMMETHODSCHECKEDWITHBOARDOFHEALTH INTEGER, SITEEXAMMETHODSCHECKEDWITHBOARDOFHEALTHCOMMENTS TEXT, SITEEXAMMETHODSCHECKEDWITHLOCALEXCAVATORS INTEGER, SITEEXAMMETHODSACCESSEDUSGS INTEGER, SITEEXAMMETHODSACCESSEDUSGSCOMMENTS TEXT, SITEEXAMDESCRIBE TEXT, REPORTCOMPLETENESSABCDE INTEGER, REPORTCOMPLETENESSD INTEGER, REPORTCOMPLETENESSSYSTEMINFORMATION INTEGER, FOREIGN KEY(SEPTICID) REFERENCES SEPTIC(ID) );
  // $cordovaSQLite.execute(db, "CREATE TABLE DEPAPPROVAL( ID INTEGER PRIMARY KEY NOT NULL, OPTION TEXT NOT NULL" );
  // $cordovaSQLite.execute(db, "CREATE TABLE SYSTEMWILLPASSIF( ID INTEGER PRIMARY KEY NOT NULL, OPTION TEXT NOT NULL" );
  // $cordovaSQLite.execute(db, "CREATE TABLE GENERALTYPEOFSYSTEM( ID INTEGER PRIMARY KEY NOT NULL, OPTION TEXT NOT NULL );
  // $cordovaSQLite.execute(db, "CREATE TABLE BUILDINGSEWERMATERIAL( ID INTEGER PRIMARY KEY NOT NULL, OPTION TEXT NOT NULL" );
  // $cordovaSQLite.execute(db, "CREATE TABLE MATERIAL(ID INTEGER PRIMARY KEY NOT NULL, OPTION TEXT NOT NULL");
}