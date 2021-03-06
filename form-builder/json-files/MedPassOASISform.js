{
components: [
 {
type: "panel",
title: "Page 1",
isNew: true,
components: [
 {
key: "panel1",
input: false,
title: "PATIENT TRACKING SHEET - Fill Out at Start of Care and Update per Agency Policy",
theme: "primary",
components: [
 {
input: false,
key: "table1",
numRows: 1,
numCols: 3,
rows: [
 [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "C M S Certification Number",
key: "cmsCertificationNumber",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
tags: [
],
customClass: "greenfont",
$$hashKey: "object:2031"
}
],
$$hashKey: "object:2022"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Branch State",
key: "branchState",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
tags: [
],
customClass: "greenfont",
$$hashKey: "object:2039"
}
],
$$hashKey: "object:2023"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Branch ID Number",
key: "branchIdNumber",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:2083",
tags: [
],
customClass: "greenfont"
}
],
$$hashKey: "object:2024"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: true,
hover: true,
condensed: true,
type: "table",
$$hashKey: "object:857",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table2",
numRows: 1,
numCols: 1,
rows: [
 [
 {
components: [
 {
input: true,
tableView: true,
label: "Provider Name, Address and Telephone Number",
key: "providerNameAddressandTelephoneNumber",
placeholder: "",
prefix: "",
suffix: "",
rows: 3,
multiple: false,
defaultValue: "",
protected: false,
persistent: true,
wysiwyg: false,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: ""
},
type: "textarea",
$$hashKey: "object:2935",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "redfont"
}
],
$$hashKey: "object:2624"
}
]
],
header: [
],
caption: "",
striped: false,
bordered: true,
hover: false,
condensed: true,
type: "table",
$$hashKey: "object:2613",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table3",
numRows: 1,
numCols: 1,
rows: [
 [
 {
components: [
 {
input: false,
key: "columns1",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "National Provider Identifier (N P I) for the attending physician who has signed the plan of care:",
key: "nationalProviderIdentifierNpIfortheattendingphysicianwhohassignedtheplanofcare",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
tags: [
],
customClass: "greenfont",
$$hashKey: "object:5412"
}
],
$$hashKey: "object:5406"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "UK - Unknown or Not Available",
datagridLabel: true,
key: "ukUnknownorNotAvailable",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
$$hashKey: "object:5420",
style: {
'margin-top': "4%"
},
customClass: "greenfont"
}
],
$$hashKey: "object:5407"
}
],
type: "columns",
$$hashKey: "object:4088",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:3719"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: true,
hover: true,
condensed: true,
type: "table",
$$hashKey: "object:3708",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table4",
numRows: 1,
numCols: 2,
rows: [
 [
 {
components: [
 {
key: "html1",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "Patient ID Number",
type: "htmlelement",
$$hashKey: "object:9623",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "/ Medical Record Number",
key: "patientIdNumberMedicalRecordNumber",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:7336",
tags: [
],
customClass: "redfont"
}
],
$$hashKey: "object:6886"
},
 {
components: [
 {
input: true,
tableView: true,
label: "Start of Care Date",
key: "startofCareDate",
placeholder: "",
format: "yyyy-MM-dd hh:mm",
enableDate: true,
enableTime: true,
defaultDate: "",
datepickerMode: "day",
datePicker: {
showWeeks: true,
startingDay: 0,
initDate: "",
minMode: "day",
maxMode: "year",
yearRange: "20",
datepickerMode: "day"
},
timePicker: {
hourStep: 1,
minuteStep: 1,
showMeridian: true,
readonlyInput: false,
mousewheel: true,
arrowkeys: true
},
protected: false,
persistent: true,
validate: {
required: false,
custom: ""
},
type: "datetime",
$$hashKey: "object:8254",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
style: {
'margin-top': "4%"
}
}
],
$$hashKey: "object:6887"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: true,
hover: true,
condensed: true,
type: "table",
$$hashKey: "object:6875",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table5",
numRows: 1,
numCols: 2,
rows: [
 [
 {
components: [
 {
key: "html2",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "Cerification Perod",
type: "htmlelement",
$$hashKey: "object:11149",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "columns2",
columns: [
 {
components: [
 {
input: true,
tableView: true,
label: "From",
key: "from",
placeholder: "",
format: "yyyy-MM-dd hh:mm",
enableDate: true,
enableTime: true,
defaultDate: "",
datepickerMode: "day",
datePicker: {
showWeeks: true,
startingDay: 0,
initDate: "",
minMode: "day",
maxMode: "year",
yearRange: "20",
datepickerMode: "day"
},
timePicker: {
hourStep: 1,
minuteStep: 1,
showMeridian: true,
readonlyInput: false,
mousewheel: true,
arrowkeys: true
},
protected: false,
persistent: true,
validate: {
required: false,
custom: ""
},
type: "datetime",
$$hashKey: "object:12794",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "redfont"
}
],
$$hashKey: "object:11670"
},
 {
components: [
 {
input: true,
tableView: true,
label: "To",
key: "to",
placeholder: "",
format: "yyyy-MM-dd hh:mm",
enableDate: true,
enableTime: true,
defaultDate: "",
datepickerMode: "day",
datePicker: {
showWeeks: true,
startingDay: 0,
initDate: "",
minMode: "day",
maxMode: "year",
yearRange: "20",
datepickerMode: "day"
},
timePicker: {
hourStep: 1,
minuteStep: 1,
showMeridian: true,
readonlyInput: false,
mousewheel: true,
arrowkeys: true
},
protected: false,
persistent: true,
validate: {
required: false,
custom: ""
},
type: "datetime",
$$hashKey: "object:13446",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "redfont"
}
],
$$hashKey: "object:11671"
}
],
type: "columns",
$$hashKey: "object:11665",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:8827"
},
 {
components: [
 {
input: false,
key: "columns3",
columns: [
 {
components: [
 {
input: true,
tableView: true,
label: "Resumption of Care Date",
key: "resumptionofCareDate",
placeholder: "",
format: "yyyy-MM-dd hh:mm",
enableDate: true,
enableTime: true,
defaultDate: "",
datepickerMode: "day",
datePicker: {
showWeeks: true,
startingDay: 0,
initDate: "",
minMode: "day",
maxMode: "year",
yearRange: "20",
datepickerMode: "day"
},
timePicker: {
hourStep: 1,
minuteStep: 1,
showMeridian: true,
readonlyInput: false,
mousewheel: true,
arrowkeys: true
},
protected: false,
persistent: true,
validate: {
required: false,
custom: ""
},
type: "datetime",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
style: {
'margin-top': "14%"
},
$$hashKey: "object:18701"
}
],
$$hashKey: "object:18695"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "NA - Not Applicable",
datagridLabel: true,
key: "naNotApplicable",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
style: {
'margin-top': "23%"
},
$$hashKey: "object:18711"
}
],
$$hashKey: "object:18696"
}
],
type: "columns",
$$hashKey: "object:14146",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:8828"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: true,
hover: true,
condensed: true,
type: "table",
$$hashKey: "object:8816",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table6",
numRows: 1,
numCols: 2,
rows: [
 [
 {
components: [
 {
key: "html3",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "Patient Name",
type: "htmlelement",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
$$hashKey: "object:35801"
},
 {
input: false,
key: "columns4",
columns: [
 {
components: [
 {
input: false,
key: "columns5",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "First",
key: "first",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
tags: [
],
customClass: "redfont",
$$hashKey: "object:35861"
}
],
$$hashKey: "object:35844"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "MI",
key: "mi",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
tags: [
],
customClass: "redfont",
$$hashKey: "object:35865"
}
],
$$hashKey: "object:35845"
}
],
type: "columns",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
$$hashKey: "object:35833"
}
],
$$hashKey: "object:35811"
},
 {
components: [
 {
input: false,
key: "columns6",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Last",
key: "last",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
tags: [
],
customClass: "redfont",
$$hashKey: "object:35871"
}
],
$$hashKey: "object:35849"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Suffix",
key: "suffix",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
tags: [
],
customClass: "redfont",
$$hashKey: "object:35875"
}
],
$$hashKey: "object:35850"
}
],
type: "columns",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
$$hashKey: "object:35837"
}
],
$$hashKey: "object:35812"
}
],
type: "columns",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
$$hashKey: "object:35802"
}
],
$$hashKey: "object:35795"
},
 {
components: [
 {
input: true,
tableView: true,
inputMask: "(999) 999-9999",
label: "# Patient Phone",
key: "patientPhone",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
protected: false,
unique: false,
persistent: true,
defaultValue: "",
validate: {
required: false
},
type: "phoneNumber",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
$$hashKey: "object:35815",
style: {
'margin-top': "11%"
}
}
],
$$hashKey: "object:35796"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: true,
hover: true,
condensed: true,
type: "table",
$$hashKey: "object:19540",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table7",
numRows: 2,
numCols: 3,
rows: [
 [
 {
components: [
 {
input: false,
key: "columns7",
columns: [
 {
components: [
 {
key: "html4",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "",
content: "Medicare Number: (including suffix)",
type: "htmlelement",
$$hashKey: "object:41659",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Hi Claim No",
key: "hiClaimNo",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:42664",
tags: [
],
customClass: "redfont"
}
],
$$hashKey: "object:40672"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "NA - No Medicare",
datagridLabel: true,
key: "naNoMedicare",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:43763",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:40673"
}
],
type: "columns",
$$hashKey: "object:40667",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:37087"
},
 {
components: [
 {
input: false,
key: "columns8",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Social Security Number",
key: "socialSecurityNumber",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:45920",
tags: [
],
customClass: "greenfont"
}
],
$$hashKey: "object:44856"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "UK - Unknown or Not Available",
datagridLabel: true,
key: "ukUnknownorNotAvailable1",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:47085",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:44857"
}
],
type: "columns",
$$hashKey: "object:44851",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:37088"
},
 {
components: [
 {
input: false,
key: "columns9",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Medicaid Number",
key: "medicaidNumber",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:49402",
tags: [
],
customClass: "greenfont"
}
],
$$hashKey: "object:48272"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "NA - No Medicaid",
datagridLabel: true,
key: "naNoMedicaid",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:50633",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:48273"
}
],
type: "columns",
$$hashKey: "object:48267",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: true,
tableView: true,
label: "Effective Date",
key: "effectiveDate",
placeholder: "",
format: "yyyy-MM-dd hh:mm",
enableDate: true,
enableTime: true,
defaultDate: "",
datepickerMode: "day",
datePicker: {
showWeeks: true,
startingDay: 0,
initDate: "",
minMode: "day",
maxMode: "year",
yearRange: "20",
datepickerMode: "day"
},
timePicker: {
hourStep: 1,
minuteStep: 1,
showMeridian: true,
readonlyInput: false,
mousewheel: true,
arrowkeys: true
},
protected: false,
persistent: true,
validate: {
required: false,
custom: ""
},
type: "datetime",
$$hashKey: "object:53113",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:37089"
}
],
 [
 {
components: [
 {
input: true,
tableView: true,
label: "Birth Date",
key: "birthDate1",
placeholder: "",
format: "yyyy-MM-dd hh:mm",
enableDate: true,
enableTime: true,
defaultDate: "",
datepickerMode: "day",
datePicker: {
showWeeks: true,
startingDay: 0,
initDate: "",
minMode: "day",
maxMode: "year",
yearRange: "20",
datepickerMode: "day"
},
timePicker: {
hourStep: 1,
minuteStep: 1,
showMeridian: true,
readonlyInput: false,
mousewheel: true,
arrowkeys: true
},
protected: false,
persistent: true,
validate: {
required: false,
custom: ""
},
type: "datetime",
$$hashKey: "object:60328",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:59656"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "radio",
label: "Gender",
key: "gender",
values: [
 {
value: "1Male",
label: "1  -  Male"
},
 {
value: "2Female",
label: "2  -    Female"
}
],
defaultValue: "",
protected: false,
persistent: true,
validate: {
required: false,
custom: "",
customPrivate: false
},
type: "radio",
$$hashKey: "object:62409",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:59657"
},
 {
components: [
],
$$hashKey: "object:59658"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: true,
hover: true,
condensed: true,
type: "table",
$$hashKey: "object:37076",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table8",
numRows: 3,
numCols: 2,
rows: [
 [
 {
components: [
 {
input: true,
tableView: true,
label: "Primary Physician's Number",
key: "primaryPhysicianNumber",
placeholder: "(select an Physician)",
data: {
values: [
 {
value: "",
label: "",
$$hashKey: "object:76343"
}
],
json: "",
url: "",
resource: "",
custom: ""
},
dataSrc: "values",
valueProperty: "",
defaultValue: "",
refreshOn: "",
filter: "",
authenticate: false,
template: "{{ item.label }}",
multiple: false,
protected: false,
unique: false,
persistent: true,
validate: {
required: false
},
type: "select",
$$hashKey: "object:76155",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "redfont"
}
],
$$hashKey: "object:66096"
},
 {
components: [
 {
input: false,
key: "columns10",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Emergency Contact Number",
key: "emergencyContactNumber",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:79983",
tags: [
]
}
],
$$hashKey: "object:77712"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Relationship",
key: "relationship",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:81532",
tags: [
]
}
],
$$hashKey: "object:77713"
}
],
type: "columns",
$$hashKey: "object:77707",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:66097"
}
],
 [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Address",
key: "address",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:83121",
tags: [
],
customClass: "redfont"
}
],
$$hashKey: "object:73993"
},
 {
components: [
 {
input: false,
key: "columns12",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Address",
key: "address1",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:97245",
tags: [
]
}
],
$$hashKey: "object:88819"
},
 {
components: [
 {
input: true,
tableView: true,
inputMask: "(999) 999-9999",
label: "Phone",
key: "phone",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
protected: false,
unique: false,
persistent: true,
defaultValue: "",
validate: {
required: false
},
type: "phoneNumber",
$$hashKey: "object:92022",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:88820"
}
],
type: "columns",
$$hashKey: "object:88814",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:73994"
}
],
 [
 {
components: [
 {
input: false,
key: "columns11",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputMask: "(999) 999-9999",
label: "Physician's Phone",
key: "physiciansPhone",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
protected: false,
unique: false,
persistent: true,
defaultValue: "",
validate: {
required: false
},
type: "phoneNumber",
$$hashKey: "object:93721",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:86464"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Physician's Fax",
key: "physiciansFax",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:95460",
tags: [
]
}
],
$$hashKey: "object:86465"
}
],
type: "columns",
$$hashKey: "object:86459",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:74001"
},
 {
components: [
 {
input: false,
key: "columns13",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Secondary Physician's Name",
key: "secondaryPhysiciansName",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:99070",
tags: [
]
}
],
$$hashKey: "object:90417"
},
 {
components: [
 {
input: true,
tableView: true,
inputMask: "(999) 999-9999",
label: "Phone",
key: "phone1",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
protected: false,
unique: false,
persistent: true,
defaultValue: "",
validate: {
required: false
},
type: "phoneNumber",
$$hashKey: "object:100935",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:90418"
}
],
type: "columns",
$$hashKey: "object:90412",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:74002"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: true,
hover: false,
condensed: true,
type: "table",
$$hashKey: "object:66085",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table9",
numRows: 1,
numCols: 6,
rows: [
 [
 {
components: [
 {
key: "html5",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "Race/Ethnicity: (Mark all that apply.)",
type: "htmlelement",
$$hashKey: "object:127506",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "1 - American Indian or Alaska Native",
datagridLabel: true,
key: "americanIndianorAlaska",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:110667",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:102845"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "2 - Asian",
datagridLabel: true,
key: "asian",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:113593",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
style: {
'margin-top': "25%"
}
}
],
$$hashKey: "object:102846"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "3 - Black or African-American",
datagridLabel: true,
key: "blackorAfricanAmerican",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:115537",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
style: {
'margin-top': "9%"
}
}
],
$$hashKey: "object:102847"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "4 - Hispanic or Latino",
datagridLabel: true,
key: "hispanicorLatino",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:121463",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
style: {
'margin-top': "12%"
},
customClass: "greenfont"
}
],
$$hashKey: "object:103869"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "5 - Native Hawaiian or Pacific Islander",
datagridLabel: true,
key: "nativeHawaiianorPacificIslander",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:123423",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
style: {
'margin-top': "7%"
}
}
],
$$hashKey: "object:103870"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "6 - White",
datagridLabel: true,
key: "white",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:125397",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
style: {
'margin-top': "21%"
}
}
],
$$hashKey: "object:103871"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: false,
hover: false,
condensed: true,
type: "table",
$$hashKey: "object:102834",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table10",
numRows: 1,
numCols: 1,
rows: [
 [
 {
components: [
 {
key: "html6",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "",
content: "Current Payment Sources for Home Care: (Mark all that apply.)",
type: "htmlelement",
$$hashKey: "object:149517",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: false,
key: "columns14",
columns: [
 {
components: [
 {
input: false,
key: "columns15",
columns: [
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"0  -  None; no charge for current services",
datagridLabel: true,
key: "nonenochargeforcurrentservices",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
$$hashKey: "object:181955"
},
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"1  -  Medicare (traditional fee-for-service)",
datagridLabel: true,
key: "medicaretraditionalfeeForService",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:185190",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"2  -  Medicare (HMO/managed care/Advantage plan)",
datagridLabel: true,
key: "medicareHmOmanagedcareAdvantageplan",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:187294",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"3  -  Medicaid (traditional fee-for-service)",
datagridLabel: true,
key: "medicaidtraditionalfeeForService",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:189412",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:181949"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"4  -  Medicaid (HMO/managed care)",
datagridLabel: true,
key: "medicaidHmOmanagedcare",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
$$hashKey: "object:181962",
customClass: "greenfont"
},
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"5  -  Workers' compensation",
datagridLabel: true,
key: "workerscompensation",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:191544",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"6  -  Title programs (for example, Title III, V, or XX)",
datagridLabel: true,
key: "titleprogramsforexampleTitleIiiVorXx",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:193690",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"7  -  Other government (for example, TriCare, VA)",
datagridLabel: true,
key: "othergovernmentforexampleTriCareVa",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:195850",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:181950"
}
],
type: "columns",
$$hashKey: "object:175749",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:151518"
},
 {
components: [
 {
input: false,
key: "columns16",
columns: [
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"8  -  Private insurance",
datagridLabel: true,
key: "privateinsurance",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:209717",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"9  -  Private HMO/managed care",
datagridLabel: true,
key: "privateHmOmanagedcare",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:211903",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"10  -  Self-pay",
datagridLabel: true,
key: "selfPay",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:214103",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: false,
key: "columns17",
columns: [
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"11  -  Other (specify):",
datagridLabel: true,
key: "otherspecify",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont",
$$hashKey: "object:232018"
}
],
$$hashKey: "object:232012"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "",
key: "textField1",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
tags: [
],
$$hashKey: "object:232025"
}
],
$$hashKey: "object:232013"
}
],
type: "columns",
$$hashKey: "object:225223",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:207581"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label:"UK  -  Unknown",
datagridLabel: true,
key: "ukUnknown1",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:335010",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:207582"
}
],
type: "columns",
$$hashKey: "object:207576",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:151519"
}
],
type: "columns",
$$hashKey: "object:151513",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:147472"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: true,
hover: true,
condensed: true,
type: "table",
$$hashKey: "object:147461",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
type: "panel",
$$hashKey: "object:738",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
key: "panel2",
input: false,
title: "CLINICAL RECORD ITEMS",
theme: "success",
components: [
 {
input: false,
key: "table11",
numRows: 1,
numCols: 2,
rows: [
 [
 {
components: [
 {
key: "html7",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "Discipline of Person Completing Assessment:",
type: "htmlelement",
$$hashKey: "object:239036",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "columns18",
columns: [
 {
components: [
 {
input: false,
key: "columns19",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "radio",
label: "",
key: "rn",
values: [
 {
value: "1Rn",
label: "1 - RN"
}
],
defaultValue: "",
protected: false,
persistent: true,
validate: {
required: false,
custom: "",
customPrivate: false
},
type: "radio",
$$hashKey: "object:250871",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:246124"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "radio",
label: "",
key: "radioField1",
values: [
 {
value: "2Pt",
label: "2 - PT"
}
],
defaultValue: "",
protected: false,
persistent: true,
validate: {
required: false,
custom: "",
customPrivate: false
},
type: "radio",
$$hashKey: "object:253359",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:246125"
}
],
type: "columns",
$$hashKey: "object:246119",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:243766"
},
 {
components: [
 {
input: false,
key: "columns20",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "radio",
label: "",
key: "radioField2",
values: [
 {
value: "3SlpSt",
label: "3 - SLP/ST"
}
],
defaultValue: "",
protected: false,
persistent: true,
validate: {
required: false,
custom: "",
customPrivate: false
},
type: "radio",
$$hashKey: "object:255959",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:248494"
},
 {
components: [
 {
input: false,
key: "columns21",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "radio",
label: "",
key: "ot",
values: [
 {
value: "4Ot",
label: "4 - OT"
}
],
defaultValue: "",
protected: false,
persistent: true,
validate: {
required: false,
custom: "",
customPrivate: false
},
type: "radio",
$$hashKey: "object:261068",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:258541"
},
 {
components: [
 {
key: "html8",
input: false,
tag: "a",
attrs: [
 {
value: "",
attr: ""
}
],
className: "redfont",
content: "clear",
type: "htmlelement",
$$hashKey: "object:263706",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:258542"
}
],
type: "columns",
$$hashKey: "object:258536",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:248495"
}
],
type: "columns",
$$hashKey: "object:248489",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:243767"
}
],
type: "columns",
$$hashKey: "object:243761",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:236687"
},
 {
components: [
 {
input: true,
tableView: true,
label:"Date Assessment Completed: month day year",
key: "dateAssessmentCompletedmonthdayyear",
placeholder: "",
format: "yyyy-MM-dd hh:mm",
enableDate: true,
enableTime: true,
defaultDate: "",
datepickerMode: "day",
datePicker: {
showWeeks: true,
startingDay: 0,
initDate: "",
minMode: "day",
maxMode: "year",
yearRange: "20",
datepickerMode: "day"
},
timePicker: {
hourStep: 1,
minuteStep: 1,
showMeridian: true,
readonlyInput: false,
mousewheel: true,
arrowkeys: true
},
protected: false,
persistent: true,
validate: {
required: false,
custom: ""
},
type: "datetime",
$$hashKey: "object:241336",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:236688"
}
]
],
header: [
],
caption: "",
striped: true,
bordered: true,
hover: false,
condensed: true,
type: "table",
$$hashKey: "object:236676",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
key: "html9",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "This Assessment is Currently Being Completed for the Following Reason:",
type: "htmlelement",
$$hashKey: "object:274098",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "columns22",
columns: [
 {
components: [
 {
input: false,
key: "columns23",
columns: [
 {
components: [
 {
input: false,
key: "columns24",
columns: [
 {
components: [
 {
key: "html10",
input: false,
tag: "img",
attrs: [
 {
value: "images/image_Home.png",
attr: "src"
}
],
className: "",
content: "",
type: "htmlelement",
$$hashKey: "object:291144",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:285866"
},
 {
components: [
],
$$hashKey: "object:285867"
}
],
type: "columns",
$$hashKey: "object:285861",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:283243"
},
 {
components: [
 {
key: "html11",
input: false,
tag: "u",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "Start/Resumption of Care:",
type: "htmlelement",
$$hashKey: "object:301683",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: true,
tableView: true,
inputType: "radio",
label: "",
key: "startofcareFurthervisitsplanned",
values: [
 {
value: "1StartOfCareFurtherVisitsPlanned",
label: "1  -  Start of care-further visits planned"
}
],
defaultValue: "",
protected: false,
persistent: true,
validate: {
required: false,
custom: "",
customPrivate: false
},
type: "radio",
$$hashKey: "object:304345",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
},
 {
input: true,
tableView: true,
inputType: "radio",
label: "",
key: "resumptionofcareafterinpatientstay",
values: [
 {
value: "3ResumptionOfCareAfterInpatientStay",
label: "3  -  Resumption of care (after inpatient stay)"
}
],
defaultValue: "",
protected: false,
persistent: true,
validate: {
required: false,
custom: "",
customPrivate: false
},
type: "radio",
$$hashKey: "object:307110",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:283244"
}
],
type: "columns",
$$hashKey: "object:283238",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:280632"
},
 {
components: [
],
$$hashKey: "object:280633"
}
],
type: "columns",
$$hashKey: "object:280627",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table12",
numRows: 1,
numCols: 1,
rows: [
 [
 {
components: [
 {
input: false,
key: "columns25",
columns: [
 {
components: [
 {
key: "html12",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "Date of Physician-ordered Start of Care (Resumption of Care): If the physician indicated a specific start of care (resumption of care) date when the patient was referred for home health services, record the date specified.",
type: "htmlelement",
$$hashKey: "object:332210",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:326651"
},
 {
components: [
 {
input: false,
key: "columns26",
columns: [
 {
components: [
 {
input: true,
tableView: true,
label: "Month-day-year",
key: "monthDayYear",
placeholder: "",
format: "yyyy-MM-dd hh:mm",
enableDate: true,
enableTime: true,
defaultDate: "",
datepickerMode: "day",
datePicker: {
showWeeks: true,
startingDay: 0,
initDate: "",
minMode: "day",
maxMode: "year",
yearRange: "20",
datepickerMode: "day"
},
timePicker: {
hourStep: 1,
minuteStep: 1,
showMeridian: true,
readonlyInput: false,
mousewheel: true,
arrowkeys: true
},
protected: false,
persistent: true,
validate: {
required: false,
custom: ""
},
type: "datetime",
$$hashKey: "object:339152",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
key: "html13",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "[Go to M0110, if date entered]",
type: "htmlelement",
$$hashKey: "object:342076",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:329427"
},
 {
components: [
 {
input: true,
inputType: "checkbox",
tableView: true,
hideLabel: true,
label: "NA - No specific SOC date ordered by physician",
datagridLabel: true,
key: "naNospecificSoCdateorderedbyphysician",
defaultValue: false,
protected: false,
persistent: true,
validate: {
required: false
},
type: "checkbox",
$$hashKey: "object:344935",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:329428"
}
],
type: "columns",
$$hashKey: "object:329422",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:326652"
}
],
type: "columns",
$$hashKey: "object:326646",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:319760"
}
]
],
header: [
],
caption: "",
striped: false,
bordered: true,
hover: false,
condensed: true,
type: "table",
$$hashKey: "object:319749",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table13",
numRows: 1,
numCols: 1,
rows: [
 [
 {
components: [
 {
input: false,
key: "columns27",
columns: [
 {
components: [
 {
key: "html14",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "Date of Referral: Indicate the date that the written or verbal referral for initiation or resumption of care was received by the HHA.",
type: "htmlelement",
$$hashKey: "object:353776",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:350883"
},
 {
components: [
 {
input: false,
key: "columns28",
columns: [
 {
components: [
 {
input: true,
tableView: true,
label: "month day year",
key: "monthdayyear",
placeholder: "",
format: "yyyy-MM-dd hh:mm",
enableDate: true,
enableTime: true,
defaultDate: "",
datepickerMode: "day",
datePicker: {
showWeeks: true,
startingDay: 0,
initDate: "",
minMode: "day",
maxMode: "year",
yearRange: "20",
datepickerMode: "day"
},
timePicker: {
hourStep: 1,
minuteStep: 1,
showMeridian: true,
readonlyInput: false,
mousewheel: true,
arrowkeys: true
},
protected: false,
persistent: true,
validate: {
required: false,
custom: ""
},
type: "datetime",
$$hashKey: "object:363987",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:361071"
},
 {
components: [
],
$$hashKey: "object:361072"
}
],
type: "columns",
$$hashKey: "object:361066",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:350884"
}
],
type: "columns",
$$hashKey: "object:350878",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:347849"
}
]
],
header: [
],
caption: "",
striped: false,
bordered: true,
hover: false,
condensed: true,
type: "table",
$$hashKey: "object:347838",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table14",
numRows: 1,
numCols: 1,
rows: [
 [
 {
components: [
 {
key: "html15",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: 'Episode Timing: Is the Medicare home health payment episode for which this assessment will define a case mix group an "early" episode or a "later" episode in the patient current sequence of adjacent Medicare home health payment episodes?',
type: "htmlelement",
$$hashKey: "object:371588",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "columns29",
columns: [
 {
components: [
 {
input: false,
key: "columns30",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "radio",
label: "",
key: "radioField3",
values: [
 {
value: "1Early",
label: "1  -  Early"
},
 {
value: "2Later",
label: "2  -  Later"
}
],
defaultValue: "",
protected: false,
persistent: true,
validate: {
required: false,
custom: "",
customPrivate: false
},
type: "radio",
$$hashKey: "object:380605",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:377593"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "radio",
label: "",
key: "radioField4",
values: [
 {
value: "ukUnknown",
label: "UK - Unknown"
},
 {
value: "naNotApplicableNoMedicareCaseMixGroupToBeDefinedByThisAssessment",
label: "NA - Not Applicable: No Medicare case mix group to be defined by this assessment."
}
],
defaultValue: "",
protected: false,
persistent: true,
validate: {
required: false,
custom: "",
customPrivate: false
},
type: "radio",
$$hashKey: "object:386851",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
},
customClass: "greenfont"
}
],
$$hashKey: "object:377594"
}
],
type: "columns",
$$hashKey: "object:377588",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:374588"
},
 {
components: [
],
$$hashKey: "object:374589"
}
],
type: "columns",
$$hashKey: "object:374583",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:368543"
}
]
],
header: [
],
caption: "",
striped: false,
bordered: true,
hover: false,
condensed: true,
type: "table",
$$hashKey: "object:368532",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "table15",
numRows: 1,
numCols: 3,
rows: [
 [
 {
components: [
 {
key: "html16",
input: false,
tag: "img",
attrs: [
 {
value: "images/MonaLisaMedpass.png",
attr: "src"
}
],
className: "",
content: "",
type: "htmlelement",
$$hashKey: "object:393258",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:390055"
},
 {
components: [
 {
key: "html17",
input: false,
tag: "p",
attrs: [
 {
value: "",
attr: ""
}
],
className: "greenfont",
content: "Patient Name",
type: "htmlelement",
$$hashKey: "object:396419",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
},
 {
input: false,
key: "columns31",
columns: [
 {
components: [
 {
input: false,
key: "columns32",
columns: [
 {
components: [
 {
input: false,
key: "columns34",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Last",
key: "last1",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:420545",
tags: [
],
customClass: "greenfont"
}
],
$$hashKey: "object:417298"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "First",
key: "first2",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:423893",
tags: [
],
customClass: "greenfont"
}
],
$$hashKey: "object:417299"
}
],
type: "columns",
$$hashKey: "object:417293",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:402766"
},
 {
components: [
 {
input: false,
key: "columns33",
columns: [
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "MI",
key: "first1",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
tags: [
],
customClass: "greenfont",
$$hashKey: "object:427332"
}
],
$$hashKey: "object:427326"
},
 {
components: [
],
$$hashKey: "object:427327"
}
],
type: "columns",
$$hashKey: "object:405949",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:402767"
}
],
type: "columns",
$$hashKey: "object:402761",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:399590"
},
 {
components: [
],
$$hashKey: "object:399591"
}
],
type: "columns",
$$hashKey: "object:399585",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
$$hashKey: "object:390056"
},
 {
components: [
 {
input: true,
tableView: true,
inputType: "text",
inputMask: "",
label: "Record No",
key: "recordNo",
placeholder: "",
prefix: "",
suffix: "",
multiple: false,
defaultValue: "",
protected: false,
unique: false,
persistent: true,
validate: {
required: false,
minLength: "",
maxLength: "",
pattern: "",
custom: "",
customPrivate: false
},
conditional: {
show: "",
when: null,
eq: ""
},
type: "textfield",
$$hashKey: "object:429170",
tags: [
],
customClass: "greenfont"
}
],
$$hashKey: "object:390057"
}
]
],
header: [
],
caption: "",
striped: false,
bordered: false,
hover: false,
condensed: true,
type: "table",
$$hashKey: "object:390044",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
type: "panel",
$$hashKey: "object:234394",
tags: [
],
conditional: {
show: "",
when: null,
eq: ""
}
}
],
input: false,
key: "page1",
$$hashKey: "object:709",
theme: "default"
}
],
display: "wizard",
page: 0,
numPages: 1
}
