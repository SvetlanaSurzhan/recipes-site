const posts = [
    {
        "recipeId": 121,
        "name": "Super Cake",
        "picture": "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAD5AAAA+QEdhgSBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYBQTFRFG9dBHNdCHtdDH9hEH9hFINhFIdhGIthHI9hIJNlIJdlJJ9lLKNlMKdpNKtpOLdpQLtpRL9pRMNtSMNtTMdtUM9tVNNtWNdxXNtxXOdxaO91cPd1dQt5iQ95jRN5jRt9lR99mSd9oSt9oS99pTOBqTeBrTuBrUOBtUuFuUuFvXuN5aOSBbuaGb+aHd+eOeOeOfOiRfeiTfuiUf+mUgOmVgemWg+mXhOmYhuqah+qbiOqcieqdiuqdi+uejeugjuuhj+uikOyjkeyjkuykk+yllOymleymme2qmu2roO6woe+xr/G9sfG+tvLCt/LDuPPEufPFu/PGvvTJv/TJwfTMwvTMxPXOyPXRyfbS0PfY0ffY0ffZ1Pfb1fjc1vjd1/jd2Pje2fjf2fjg2/nh3Pni3fnj3/nk4Prl4frm5Prp5frp5vvq5/vr6fvs7vzx7/zy8fzz8v308v319P329f339v349/74+P75+f76+v77+/77+/78/P/9/f/+/v/+////7vzUhgAAAVVJREFUGBnNwfk/kwEAx/HPzGOTq5U7w1oSHUjOmDm71MyZahMqdG25Co99/3XmtefY4nfvN9dQIMDVWp+/+y79iI2EuEzJjCkdra4eSacv/fwntKF0/10DjNCzlL60UaDlWPM15Nyek3mPPMaaBnHp1aYPt0ktQuWDIixxvcAlaO7W4U3oCZbq1GkIx4CGoEdax9anURyzaocJSU1Yworh2DJLoUt6g8138hNbhZJA6S9FcCR0C0tAHzj3WHqEbU1V2A7SZEV13AndYzcBv7mDY101ZL2S4n0Z/X0KbXqLY1pRsjy9h8oahAEN4ag3Uze40Ph6T3rvpe7PSTMui3pITtn9sAfPkqK4basWF09EiWJc7ugz3rCfnPpl/WvGrUfJhT39nmoAyjqGd/UpSJ55SYcfTWk/+TUjmePF5PGlVyIdBrWR5L4y32b7gxQw/FgC5Vw/Zz4UUsAnQOdfAAAAAElFTkSuQmCC",
        "description": null,
        "ingredients": [
            {
                "ingredientId": 36,
                "name": "Flour",
                "quantity": 1,
                "units": "pound",
                "recipeId": 121
            },
            {
                "ingredientId": 37,
                "name": "Egg",
                "quantity": 2,
                "units": "each",
                "recipeId": 121
            },
            {
                "ingredientId": 38,
                "name": "Whipped cream",
                "quantity": 0.5,
                "units": "ml",
                "recipeId": 121
            },
            {
                "ingredientId": 40,
                "name": "Sugar",
                "quantity": 0.2,
                "units": "pound",
                "recipeId": 121
            }
        ],
        "type": null,
        "typeId": 1
    },
    {
        "recipeId": 122,
        "name": "Chicken drumstick",
        "picture": "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAD5AAAA+QEdhgSBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYBQTFRFG9dBHNdCHtdDH9hEH9hFINhFIdhGIthHI9hIJNlIJdlJJ9lLKNlMKdpNKtpOLdpQLtpRL9pRMNtSMNtTMdtUM9tVNNtWNdxXNtxXOdxaO91cPd1dQt5iQ95jRN5jRt9lR99mSd9oSt9oS99pTOBqTeBrTuBrUOBtUuFuUuFvXuN5aOSBbuaGb+aHd+eOeOeOfOiRfeiTfuiUf+mUgOmVgemWg+mXhOmYhuqah+qbiOqcieqdiuqdi+uejeugjuuhj+uikOyjkeyjkuykk+yllOymleymme2qmu2roO6woe+xr/G9sfG+tvLCt/LDuPPEufPFu/PGvvTJv/TJwfTMwvTMxPXOyPXRyfbS0PfY0ffY0ffZ1Pfb1fjc1vjd1/jd2Pje2fjf2fjg2/nh3Pni3fnj3/nk4Prl4frm5Prp5frp5vvq5/vr6fvs7vzx7/zy8fzz8v308v319P329f339v349/74+P75+f76+v77+/77+/78/P/9/f/+/v/+////7vzUhgAAAVVJREFUGBnNwfk/kwEAx/HPzGOTq5U7w1oSHUjOmDm71MyZahMqdG25Co99/3XmtefY4nfvN9dQIMDVWp+/+y79iI2EuEzJjCkdra4eSacv/fwntKF0/10DjNCzlL60UaDlWPM15Nyek3mPPMaaBnHp1aYPt0ktQuWDIixxvcAlaO7W4U3oCZbq1GkIx4CGoEdax9anURyzaocJSU1Yworh2DJLoUt6g8138hNbhZJA6S9FcCR0C0tAHzj3WHqEbU1V2A7SZEV13AndYzcBv7mDY101ZL2S4n0Z/X0KbXqLY1pRsjy9h8oahAEN4ag3Uze40Ph6T3rvpe7PSTMui3pITtn9sAfPkqK4basWF09EiWJc7ugz3rCfnPpl/WvGrUfJhT39nmoAyjqGd/UpSJ55SYcfTWk/+TUjmePF5PGlVyIdBrWR5L4y32b7gxQw/FgC5Vw/Zz4UUsAnQOdfAAAAAElFTkSuQmCC",
        "description": "dhfkjdshfjkhdskj",
        "ingredients": [
            {
                "ingredientId": 41,
                "name": "Chicken drumstick",
                "quantity": 1.5,
                "units": "pound",
                "recipeId": 122
            },
            {
                "ingredientId": 42,
                "name": "Solt",
                "quantity": 0.5,
                "units": "tsp",
                "recipeId": 122
            },
            {
                "ingredientId": 40,
                "name": "Sugar",
                "quantity": 2,
                "units": "tsp",
                "recipeId": 122
            }
        ],
        "type": null,
        "typeId": 3
    }
];


export default posts;    