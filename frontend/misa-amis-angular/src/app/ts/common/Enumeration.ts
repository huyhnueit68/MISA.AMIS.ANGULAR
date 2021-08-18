var Enumeration:any = Enumeration || {};

/**
 * Gender
 */
Enumeration.Gender = {
    Female: 0,
    Male: 1,
    Other: 2
}

/**
 * WorkS tatus
 */
Enumeration.WorkStatus = {
    Active: 0,
    Intern: 1,
    Retired: 2
}

/**
 * Form mode
 */
Enumeration.FormMode = {
    Add: 1,
    Edit: 2,
    Delete: 3,
    Copy: 4
}

/**
 * save mode
 */
Enumeration.SaveMode = {
    Save: 1,
    SaveContinue: 2
}

/**
 * edut mode
 */
Enumeration.EditMode = {
    Edit: 1,
    EditContinue: 2
}

/**
 * state validate
 */
Enumeration.StateValid = {
    Required: 1,
    Duplicate: 2
}

/**
 * popup warning state
 */
Enumeration.PopupMode = {
    Error: 1,
    WarningValidate: 2,
    WarningDelete: 3,
    Info: 4
}

/**
 * state change page 
 */
Enumeration.pageChange = {
    Previous: 1,
    Behind: 2
}

Enumeration.WindowSize = {
    Width: 1366,
    Height: 768
}

export default Enumeration;