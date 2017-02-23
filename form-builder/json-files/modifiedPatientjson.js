{
  "components": [
    {
      "type": "panel",
      "title": "1",
      "components": [
        {
          "key": "panel1",
          "input": false,
          "title": "PATIENT TRACKING INFORMATION",
          "theme": "info",
          "components": [
            {
              "input": false,
              "key": "table1",
              "numRows": 1,
              "numCols": 2,
              "rows": [
                [
                  {
                    "components": [
                      {
                        "input": false,
                        "key": "columns14",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "inputType": "text",
                                "inputMask": "",
                                "label": "C M S Certification Number",
                                "key": "cmsCertificationNumber",
                                "placeholder": "",
                                "prefix": "",
                                "suffix": "",
                                "multiple": false,
                                "defaultValue": "",
                                "protected": false,
                                "unique": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "minLength": "",
                                  "maxLength": "",
                                  "pattern": "",
                                  "custom": "",
                                  "customPrivate": false
                                },
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "type": "textfield",
                                "$$hashKey": "object:174764",
                                "tags": []
                              }
                            ],
                            "$$hashKey": "object:172558"
                          },
                          {
                            "components": [
                              {
                                "input": false,
                                "key": "columns15",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "Branch State",
                                        "key": "branchState",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "$$hashKey": "object:185109",
                                        "tags": []
                                      }
                                    ],
                                    "$$hashKey": "object:182851"
                                  },
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "Branch ID Number",
                                        "key": "branchId",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "$$hashKey": "object:187467",
                                        "tags": []
                                      }
                                    ],
                                    "$$hashKey": "object:182852"
                                  }
                                ],
                                "type": "columns",
                                "$$hashKey": "object:182846",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:172559"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:172553",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "columns1",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "inputType": "text",
                                "inputMask": "",
                                "label": "National Provider Identifier (NPI)",
                                "key": "nationalProviderIdentifierNpi",
                                "placeholder": "",
                                "prefix": "",
                                "suffix": "",
                                "multiple": false,
                                "defaultValue": "",
                                "protected": false,
                                "unique": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "minLength": "",
                                  "maxLength": "",
                                  "pattern": "",
                                  "custom": "",
                                  "customPrivate": false
                                },
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "type": "textfield",
                                "tags": [],
                                "style": {
                                  "margin-top": "2%"
                                },
                                "$$hashKey": "object:12215"
                              },
                              {
                                "key": "html2",
                                "input": false,
                                "tag": "p",
                                "attrs": [
                                  {
                                    "value": "",
                                    "attr": ""
                                  }
                                ],
                                "className": "",
                                "content": "(for the attending physician who has signed  the plan of care)",
                                "type": "htmlelement",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "$$hashKey": "object:12216"
                              }
                            ],
                            "$$hashKey": "object:12209"
                          },
                          {
                            "components": [
                              {
                                "input": true,
                                "inputType": "checkbox",
                                "tableView": true,
                                "hideLabel": true,
                                "label": "UK - Unknown or Not Available",
                                "datagridLabel": true,
                                "key": "ukUnknownorNotAvailable",
                                "defaultValue": false,
                                "protected": false,
                                "persistent": true,
                                "validate": {
                                  "required": false
                                },
                                "type": "checkbox",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "style": {
                                  "margin-top": "9%"
                                },
                                "$$hashKey": "object:12228"
                              }
                            ],
                            "$$hashKey": "object:12210"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:2555",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "columns5",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "inputType": "text",
                                "inputMask": "",
                                "label": "Primary Referring Physician I.D",
                                "key": "primaryReferringPhysician",
                                "placeholder": "",
                                "prefix": "",
                                "suffix": "",
                                "multiple": false,
                                "defaultValue": "",
                                "protected": false,
                                "unique": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "minLength": "",
                                  "maxLength": "",
                                  "pattern": "",
                                  "custom": "",
                                  "customPrivate": false
                                },
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "type": "textfield",
                                "$$hashKey": "object:10992",
                                "tags": []
                              }
                            ],
                            "$$hashKey": "object:10515"
                          },
                          {
                            "components": [
                              {
                                "input": true,
                                "inputType": "checkbox",
                                "tableView": true,
                                "hideLabel": true,
                                "label": "UK - Unknown or Not Availlable",
                                "datagridLabel": true,
                                "key": "ukUnknownorNotAvaillable",
                                "defaultValue": false,
                                "protected": false,
                                "persistent": true,
                                "validate": {
                                  "required": false
                                },
                                "type": "checkbox",
                                "$$hashKey": "object:11569",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "style": {
                                  "margin-top": "7%"
                                }
                              }
                            ],
                            "$$hashKey": "object:10516"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:10510",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "table2",
                        "numRows": 2,
                        "numCols": 2,
                        "rows": [
                          [
                            {
                              "components": [
                                {
                                  "key": "html1",
                                  "input": false,
                                  "tag": "p",
                                  "attrs": [
                                    {
                                      "value": "",
                                      "attr": ""
                                    }
                                  ],
                                  "className": "",
                                  "content": "Primary Referring Physician",
                                  "type": "htmlelement",
                                  "$$hashKey": "object:19073",
                                  "tags": [],
                                  "conditional": {
                                    "show": "",
                                    "when": null,
                                    "eq": ""
                                  }
                                }
                              ],
                              "$$hashKey": "object:18406"
                            },
                            {
                              "components": [
                                {
                                  "key": "html3",
                                  "input": false,
                                  "tag": "p",
                                  "attrs": [
                                    {
                                      "value": "",
                                      "attr": ""
                                    }
                                  ],
                                  "className": "",
                                  "content": "Other Physicain",
                                  "type": "htmlelement",
                                  "$$hashKey": "object:19694",
                                  "tags": [],
                                  "conditional": {
                                    "show": "",
                                    "when": null,
                                    "eq": ""
                                  }
                                }
                              ],
                              "$$hashKey": "object:18407"
                            }
                          ],
                          [
                            {
                              "components": [
                                {
                                  "input": false,
                                  "key": "columns6",
                                  "columns": [
                                    {
                                      "components": [
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "First",
                                          "key": "first",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "tags": [],
                                          "$$hashKey": "object:25804"
                                        }
                                      ],
                                      "$$hashKey": "object:25798"
                                    },
                                    {
                                      "components": [
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "Last",
                                          "key": "last",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "tags": [],
                                          "style": {
                                            "margin-left": "",
                                            "margin-right": ""
                                          },
                                          "$$hashKey": "object:25812"
                                        }
                                      ],
                                      "$$hashKey": "object:25799"
                                    }
                                  ],
                                  "type": "columns",
                                  "$$hashKey": "object:20326",
                                  "tags": [],
                                  "conditional": {
                                    "show": "",
                                    "when": null,
                                    "eq": ""
                                  }
                                },
                                {
                                  "input": true,
                                  "tableView": true,
                                  "inputType": "text",
                                  "inputMask": "",
                                  "label": "Address",
                                  "key": "address",
                                  "placeholder": "",
                                  "prefix": "",
                                  "suffix": "",
                                  "multiple": false,
                                  "defaultValue": "",
                                  "protected": false,
                                  "unique": false,
                                  "persistent": true,
                                  "validate": {
                                    "required": false,
                                    "minLength": "",
                                    "maxLength": "",
                                    "pattern": "",
                                    "custom": "",
                                    "customPrivate": false
                                  },
                                  "conditional": {
                                    "show": "",
                                    "when": null,
                                    "eq": ""
                                  },
                                  "type": "textfield",
                                  "$$hashKey": "object:27643",
                                  "tags": [],
                                  "style": {
                                    "margin-top": "2%"
                                  }
                                },
                                {
                                  "input": false,
                                  "key": "columns8",
                                  "columns": [
                                    {
                                      "components": [
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputMask": "(999) 999-9999",
                                          "label": "Phone Number",
                                          "key": "phoneNumber",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "defaultValue": "",
                                          "validate": {
                                            "required": false
                                          },
                                          "type": "phoneNumber",
                                          "$$hashKey": "object:32481",
                                          "tags": [],
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "style": {
                                            "margin-top": "3%"
                                          }
                                        },
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "City",
                                          "key": "city",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "$$hashKey": "object:30437",
                                          "tags": [],
                                          "style": {
                                            "margin-top": "3%"
                                          }
                                        }
                                      ],
                                      "$$hashKey": "object:29535"
                                    },
                                    {
                                      "components": [
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "State",
                                          "key": "state",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "$$hashKey": "object:33563",
                                          "tags": [],
                                          "style": {
                                            "margin-top": "3%"
                                          }
                                        },
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "ZipCode",
                                          "key": "zipCode",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "$$hashKey": "object:31439",
                                          "tags": [],
                                          "style": {
                                            "margin-top": "3%"
                                          }
                                        }
                                      ],
                                      "$$hashKey": "object:29536"
                                    }
                                  ],
                                  "type": "columns",
                                  "$$hashKey": "object:29530",
                                  "tags": [],
                                  "conditional": {
                                    "show": "",
                                    "when": null,
                                    "eq": ""
                                  }
                                }
                              ],
                              "$$hashKey": "object:18412"
                            },
                            {
                              "components": [
                                {
                                  "input": false,
                                  "key": "columns7",
                                  "columns": [
                                    {
                                      "components": [
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "First",
                                          "key": "first1",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "$$hashKey": "object:23220",
                                          "tags": []
                                        }
                                      ],
                                      "$$hashKey": "object:22490"
                                    },
                                    {
                                      "components": [
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "Last",
                                          "key": "last1",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "$$hashKey": "object:26773",
                                          "tags": []
                                        }
                                      ],
                                      "$$hashKey": "object:22491"
                                    }
                                  ],
                                  "type": "columns",
                                  "$$hashKey": "object:22485",
                                  "tags": [],
                                  "conditional": {
                                    "show": "",
                                    "when": null,
                                    "eq": ""
                                  }
                                },
                                {
                                  "input": true,
                                  "tableView": true,
                                  "inputType": "text",
                                  "inputMask": "",
                                  "label": "Address",
                                  "key": "address1",
                                  "placeholder": "",
                                  "prefix": "",
                                  "suffix": "",
                                  "multiple": false,
                                  "defaultValue": "",
                                  "protected": false,
                                  "unique": false,
                                  "persistent": true,
                                  "validate": {
                                    "required": false,
                                    "minLength": "",
                                    "maxLength": "",
                                    "pattern": "",
                                    "custom": "",
                                    "customPrivate": false
                                  },
                                  "conditional": {
                                    "show": "",
                                    "when": null,
                                    "eq": ""
                                  },
                                  "type": "textfield",
                                  "$$hashKey": "object:28578",
                                  "tags": [],
                                  "style": {
                                    "margin-top": "2%"
                                  }
                                },
                                {
                                  "input": false,
                                  "key": "columns9",
                                  "columns": [
                                    {
                                      "components": [
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputMask": "(999) 999-9999",
                                          "label": "Phone Number",
                                          "key": "phoneNumber1",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "defaultValue": "",
                                          "validate": {
                                            "required": false
                                          },
                                          "type": "phoneNumber",
                                          "$$hashKey": "object:39401",
                                          "tags": [],
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "style": {
                                            "margin-top": "3%"
                                          }
                                        },
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "City",
                                          "key": "city1",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "$$hashKey": "object:35762",
                                          "tags": [],
                                          "style": {
                                            "margin-top": "3%"
                                          }
                                        }
                                      ],
                                      "$$hashKey": "object:34690"
                                    },
                                    {
                                      "components": [
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "State",
                                          "key": "state1",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "$$hashKey": "object:38149",
                                          "tags": [],
                                          "style": {
                                            "margin-top": "3%"
                                          }
                                        },
                                        {
                                          "input": true,
                                          "tableView": true,
                                          "inputType": "text",
                                          "inputMask": "",
                                          "label": "Zipcode",
                                          "key": "zipcode",
                                          "placeholder": "",
                                          "prefix": "",
                                          "suffix": "",
                                          "multiple": false,
                                          "defaultValue": "",
                                          "protected": false,
                                          "unique": false,
                                          "persistent": true,
                                          "validate": {
                                            "required": false,
                                            "minLength": "",
                                            "maxLength": "",
                                            "pattern": "",
                                            "custom": "",
                                            "customPrivate": false
                                          },
                                          "conditional": {
                                            "show": "",
                                            "when": null,
                                            "eq": ""
                                          },
                                          "type": "textfield",
                                          "$$hashKey": "object:36937",
                                          "tags": [],
                                          "style": {
                                            "margin-top": "3%"
                                          }
                                        }
                                      ],
                                      "$$hashKey": "object:34691"
                                    }
                                  ],
                                  "type": "columns",
                                  "$$hashKey": "object:34685",
                                  "tags": [],
                                  "conditional": {
                                    "show": "",
                                    "when": null,
                                    "eq": ""
                                  }
                                }
                              ],
                              "$$hashKey": "object:18413"
                            }
                          ]
                        ],
                        "header": [],
                        "caption": "",
                        "striped": false,
                        "bordered": true,
                        "hover": false,
                        "condensed": true,
                        "type": "table",
                        "$$hashKey": "object:18395",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-right": "",
                          "margin-left": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "columns16",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "inputType": "text",
                                "inputMask": "",
                                "label": "Patient ID Number",
                                "key": "patientIdNumber1",
                                "placeholder": "",
                                "prefix": "",
                                "suffix": "",
                                "multiple": false,
                                "defaultValue": "",
                                "protected": false,
                                "unique": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "minLength": "",
                                  "maxLength": "",
                                  "pattern": "",
                                  "custom": "",
                                  "customPrivate": false
                                },
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "type": "textfield",
                                "$$hashKey": "object:206837",
                                "tags": []
                              }
                            ],
                            "$$hashKey": "object:204488"
                          },
                          {
                            "components": [
                              {
                                "input": false,
                                "key": "columns17",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "label": "Start of care Date",
                                        "key": "startofcareDate",
                                        "placeholder": "",
                                        "format": "yyyy-MM-dd hh:mm",
                                        "enableDate": true,
                                        "enableTime": true,
                                        "defaultDate": "",
                                        "datepickerMode": "day",
                                        "datePicker": {
                                          "showWeeks": true,
                                          "startingDay": 0,
                                          "initDate": "",
                                          "minMode": "day",
                                          "maxMode": "year",
                                          "yearRange": "20",
                                          "datepickerMode": "day"
                                        },
                                        "timePicker": {
                                          "hourStep": 1,
                                          "minuteStep": 1,
                                          "showMeridian": true,
                                          "readonlyInput": false,
                                          "mousewheel": true,
                                          "arrowkeys": true
                                        },
                                        "protected": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "custom": ""
                                        },
                                        "type": "datetime",
                                        "$$hashKey": "object:211692",
                                        "tags": [],
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        }
                                      }
                                    ],
                                    "$$hashKey": "object:209291"
                                  },
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "label": "Resumption of care Date",
                                        "key": "resumptionofcareDate",
                                        "placeholder": "",
                                        "format": "yyyy-MM-dd hh:mm",
                                        "enableDate": true,
                                        "enableTime": true,
                                        "defaultDate": "",
                                        "datepickerMode": "day",
                                        "datePicker": {
                                          "showWeeks": true,
                                          "startingDay": 0,
                                          "initDate": "",
                                          "minMode": "day",
                                          "maxMode": "year",
                                          "yearRange": "20",
                                          "datepickerMode": "day"
                                        },
                                        "timePicker": {
                                          "hourStep": 1,
                                          "minuteStep": 1,
                                          "showMeridian": true,
                                          "readonlyInput": false,
                                          "mousewheel": true,
                                          "arrowkeys": true
                                        },
                                        "protected": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "custom": ""
                                        },
                                        "type": "datetime",
                                        "$$hashKey": "object:214223",
                                        "tags": [],
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        }
                                      },
                                      {
                                        "input": true,
                                        "inputType": "checkbox",
                                        "tableView": true,
                                        "hideLabel": true,
                                        "label": "NA - not Applicable",
                                        "datagridLabel": true,
                                        "key": "naNotApplicable",
                                        "defaultValue": false,
                                        "protected": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false
                                        },
                                        "type": "checkbox",
                                        "$$hashKey": "object:219032",
                                        "tags": [],
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        }
                                      }
                                    ],
                                    "$$hashKey": "object:209292"
                                  }
                                ],
                                "type": "columns",
                                "$$hashKey": "object:209286",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:204489"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:204483",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "key": "html5",
                        "input": false,
                        "tag": "p",
                        "attrs": [
                          {
                            "value": "",
                            "attr": ""
                          }
                        ],
                        "className": "",
                        "content": "Patient Name",
                        "type": "htmlelement",
                        "$$hashKey": "object:85593",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "columns10",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": false,
                                "key": "columns18",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "First",
                                        "key": "first3",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "tags": [],
                                        "$$hashKey": "object:306392"
                                      }
                                    ],
                                    "$$hashKey": "object:306386"
                                  },
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "Last",
                                        "key": "last3",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "tags": [],
                                        "$$hashKey": "object:306400"
                                      }
                                    ],
                                    "$$hashKey": "object:306387"
                                  }
                                ],
                                "type": "columns",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "$$hashKey": "object:306166"
                              }
                            ],
                            "$$hashKey": "object:306160"
                          },
                          {
                            "components": [
                              {
                                "input": false,
                                "key": "columns19",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "MI",
                                        "key": "mi1",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "tags": [],
                                        "$$hashKey": "object:306202"
                                      }
                                    ],
                                    "$$hashKey": "object:306180"
                                  },
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "Suffix",
                                        "key": "suffix1",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "tags": [],
                                        "$$hashKey": "object:306206"
                                      }
                                    ],
                                    "$$hashKey": "object:306181"
                                  }
                                ],
                                "type": "columns",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "$$hashKey": "object:306175"
                              }
                            ],
                            "$$hashKey": "object:306161"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:221417",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "key": "html6",
                        "input": false,
                        "tag": "p",
                        "attrs": [
                          {
                            "value": "",
                            "attr": ""
                          }
                        ],
                        "className": "",
                        "content": "Patient Address",
                        "type": "htmlelement",
                        "$$hashKey": "object:97581",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "columns11",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": false,
                                "key": "columns12",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "Street",
                                        "key": "street",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "$$hashKey": "object:252495",
                                        "tags": []
                                      }
                                    ],
                                    "$$hashKey": "object:248026"
                                  },
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "City",
                                        "key": "city2",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "$$hashKey": "object:254833",
                                        "tags": []
                                      }
                                    ],
                                    "$$hashKey": "object:248027"
                                  }
                                ],
                                "type": "columns",
                                "$$hashKey": "object:248021",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              },
                              {
                                "input": true,
                                "tableView": true,
                                "inputMask": "(999) 999-9999",
                                "label": "Phone Number",
                                "key": "phoneNumber2",
                                "placeholder": "",
                                "prefix": "",
                                "suffix": "",
                                "multiple": false,
                                "protected": false,
                                "unique": false,
                                "persistent": true,
                                "defaultValue": "",
                                "validate": {
                                  "required": false
                                },
                                "type": "phoneNumber",
                                "$$hashKey": "object:279314",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "style": {
                                  "margin-top": "3%"
                                }
                              }
                            ],
                            "$$hashKey": "object:243516"
                          },
                          {
                            "components": [
                              {
                                "input": false,
                                "key": "columns20",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "State",
                                        "key": "state2",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "$$hashKey": "object:257211",
                                        "tags": []
                                      }
                                    ],
                                    "$$hashKey": "object:250257"
                                  },
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "Zipcode",
                                        "key": "zipcode1",
                                        "placeholder": "",
                                        "prefix": "",
                                        "suffix": "",
                                        "multiple": false,
                                        "defaultValue": "",
                                        "protected": false,
                                        "unique": false,
                                        "persistent": true,
                                        "validate": {
                                          "required": false,
                                          "minLength": "",
                                          "maxLength": "",
                                          "pattern": "",
                                          "custom": "",
                                          "customPrivate": false
                                        },
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "type": "textfield",
                                        "$$hashKey": "object:259629",
                                        "tags": []
                                      }
                                    ],
                                    "$$hashKey": "object:250258"
                                  }
                                ],
                                "type": "columns",
                                "$$hashKey": "object:250252",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:243517"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:243511",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      }
                    ],
                    "$$hashKey": "object:581"
                  },
                  {
                    "components": [
                      {
                        "input": false,
                        "key": "columns2",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "inputType": "text",
                                "inputMask": "",
                                "label": "Medicare Number",
                                "key": "medicareNumber",
                                "placeholder": "",
                                "prefix": "",
                                "suffix": "",
                                "multiple": false,
                                "defaultValue": "",
                                "protected": false,
                                "unique": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "minLength": "",
                                  "maxLength": "",
                                  "pattern": "",
                                  "custom": "",
                                  "customPrivate": false
                                },
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "type": "textfield",
                                "$$hashKey": "object:4296",
                                "tags": []
                              }
                            ],
                            "$$hashKey": "object:4017"
                          },
                          {
                            "components": [
                              {
                                "input": true,
                                "inputType": "checkbox",
                                "tableView": true,
                                "hideLabel": true,
                                "label": "NA - no medicare",
                                "datagridLabel": true,
                                "key": "naNomedicare",
                                "defaultValue": false,
                                "protected": false,
                                "persistent": true,
                                "validate": {
                                  "required": false
                                },
                                "type": "checkbox",
                                "$$hashKey": "object:4675",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "style": {
                                  "margin-top": "13%"
                                }
                              }
                            ],
                            "$$hashKey": "object:4018"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:4012",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "columns3",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "inputType": "text",
                                "inputMask": "",
                                "label": "Social Security Number",
                                "key": "socialSecurityNumber",
                                "placeholder": "",
                                "prefix": "",
                                "suffix": "",
                                "multiple": false,
                                "defaultValue": "",
                                "protected": false,
                                "unique": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "minLength": "",
                                  "maxLength": "",
                                  "pattern": "",
                                  "custom": "",
                                  "customPrivate": false
                                },
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "type": "textfield",
                                "$$hashKey": "object:5615",
                                "tags": []
                              }
                            ],
                            "$$hashKey": "object:5270"
                          },
                          {
                            "components": [
                              {
                                "input": true,
                                "inputType": "checkbox",
                                "tableView": true,
                                "hideLabel": true,
                                "label": "UK - Unknown or Not Available",
                                "datagridLabel": true,
                                "key": "ukUnknownorNotAvailable1",
                                "defaultValue": false,
                                "protected": false,
                                "persistent": true,
                                "validate": {
                                  "required": false
                                },
                                "type": "checkbox",
                                "$$hashKey": "object:6060",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "style": {
                                  "margin-top": "13%"
                                }
                              }
                            ],
                            "$$hashKey": "object:5271"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:5265",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "columns4",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "inputType": "text",
                                "inputMask": "",
                                "label": "Medicaid Number",
                                "key": "medicaidNumber",
                                "placeholder": "",
                                "prefix": "",
                                "suffix": "",
                                "multiple": false,
                                "defaultValue": "",
                                "protected": false,
                                "unique": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "minLength": "",
                                  "maxLength": "",
                                  "pattern": "",
                                  "custom": "",
                                  "customPrivate": false
                                },
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "type": "textfield",
                                "$$hashKey": "object:8747",
                                "tags": []
                              }
                            ],
                            "$$hashKey": "object:8333"
                          },
                          {
                            "components": [
                              {
                                "input": true,
                                "inputType": "checkbox",
                                "tableView": true,
                                "hideLabel": true,
                                "label": "NA - No Medicaid",
                                "datagridLabel": true,
                                "key": "naNoMedicaid",
                                "defaultValue": false,
                                "protected": false,
                                "persistent": true,
                                "validate": {
                                  "required": false
                                },
                                "type": "checkbox",
                                "$$hashKey": "object:9261",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "style": {
                                  "margin-top": "13%"
                                }
                              }
                            ],
                            "$$hashKey": "object:8334"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:8328",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "columns21",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "inputType": "radio",
                                "label": "Gender",
                                "key": "gender1",
                                "values": [
                                  {
                                    "value": "Male",
                                    "label": "1  -  Male"
                                  },
                                  {
                                    "value": "Female",
                                    "label": "2  -  Female"
                                  }
                                ],
                                "defaultValue": "",
                                "protected": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "custom": "",
                                  "customPrivate": false
                                },
                                "type": "radio",
                                "$$hashKey": "object:271909",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:262092"
                          },
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "label": "Birth Date",
                                "key": "birthDate1",
                                "placeholder": "",
                                "format": "yyyy-MM-dd hh:mm",
                                "enableDate": true,
                                "enableTime": true,
                                "defaultDate": "",
                                "datepickerMode": "day",
                                "datePicker": {
                                  "showWeeks": true,
                                  "startingDay": 0,
                                  "initDate": "",
                                  "minMode": "day",
                                  "maxMode": "year",
                                  "yearRange": "20",
                                  "datepickerMode": "day"
                                },
                                "timePicker": {
                                  "hourStep": 1,
                                  "minuteStep": 1,
                                  "showMeridian": true,
                                  "readonlyInput": false,
                                  "mousewheel": true,
                                  "arrowkeys": true
                                },
                                "protected": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "custom": ""
                                },
                                "type": "datetime",
                                "$$hashKey": "object:274449",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:262093"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:262087",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "key": "html4",
                        "input": false,
                        "tag": "p",
                        "attrs": [
                          {
                            "value": "",
                            "attr": ""
                          }
                        ],
                        "className": "",
                        "content": "Race/Ethnicity:(Mark All that apply)",
                        "type": "htmlelement",
                        "$$hashKey": "object:51768",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "1  -  American Indian or Alaska Native",
                        "datagridLabel": true,
                        "key": "americanIndianorAlaskaNative",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:53076",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-right": "",
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "2  -  Asian",
                        "datagridLabel": true,
                        "key": "asian",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:54430",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "3  -  Black or African American",
                        "datagridLabel": true,
                        "key": "blackorAfricanAmerican",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:55798",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "4  -  Hispanic or Latino",
                        "datagridLabel": true,
                        "key": "hispanicorLatino",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:57901",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "5  -  Native Hawaiian or Pacific Islander",
                        "datagridLabel": true,
                        "key": "nativeHawaiianorPacificIslander",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:60756",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "6  -  White",
                        "datagridLabel": true,
                        "key": "white",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:62166",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "key": "html7",
                        "input": false,
                        "tag": "p",
                        "attrs": [
                          {
                            "value": "",
                            "attr": ""
                          }
                        ],
                        "className": "",
                        "content": "Current Payment Source for Home Care(Mark all that apply)",
                        "type": "htmlelement",
                        "$$hashKey": "object:111081",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "0  -  None ;no charge for current Service",
                        "datagridLabel": true,
                        "key": "nonenochargeforcurrentService",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:113060",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "1  -  Medicare (traditional fee for Service)",
                        "datagridLabel": true,
                        "key": "medicaretraditionalfeeforService",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:118188",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "marginleft": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "2  -  Medicare(HMO/Managed care/Advantage Plan)",
                        "datagridLabel": true,
                        "key": "medicareHmoManagedcareAdvantagePlan",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:121271",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "3  -  Medicaid(traditional fee for service)",
                        "datagridLabel": true,
                        "key": "medicaidtraditionalfeeforservice",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:124376",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "4  -  Medicaid(HMO/managed care)",
                        "datagridLabel": true,
                        "key": "medicaidHmOmanagedcare",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:126443",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "5  -  Workers' Compensation",
                        "datagridLabel": true,
                        "key": "workersCompensation",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:129589",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "6  -  Title Programs(for example,Title III,V or XX)",
                        "datagridLabel": true,
                        "key": "titleProgramsforexampleTitleIiiVorXx",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:131684",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "7  -  Other government  (for example,TriCare ,VA)",
                        "datagridLabel": true,
                        "key": "othergovernmentforexampleTriCareVa",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:133793",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "8  -  Private insurance",
                        "datagridLabel": true,
                        "key": "privateinsurance",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:137002",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "9  -  private HMO/Manged Care",
                        "datagridLabel": true,
                        "key": "privateHmoMangedCare",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:139139",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "10  -  SelfPay",
                        "datagridLabel": true,
                        "key": "selfPay",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:142390",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "11  -  Other Specify",
                        "datagridLabel": true,
                        "key": "otherSpecify",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:295949",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "input": true,
                        "tableView": true,
                        "inputType": "text",
                        "inputMask": "",
                        "label": "",
                        "key": "textField1",
                        "placeholder": "",
                        "prefix": "",
                        "suffix": "",
                        "multiple": false,
                        "defaultValue": "",
                        "protected": false,
                        "unique": false,
                        "persistent": true,
                        "validate": {
                          "required": false,
                          "minLength": "",
                          "maxLength": "",
                          "pattern": "",
                          "custom": "",
                          "customPrivate": false
                        },
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "type": "textfield",
                        "$$hashKey": "object:299718",
                        "tags": [],
                        "style": {
                          "margin-left": "15%",
                          "margin-right": "20%"
                        }
                      },
                      {
                        "input": true,
                        "inputType": "checkbox",
                        "tableView": true,
                        "hideLabel": true,
                        "label": "UK  -  Unknown",
                        "datagridLabel": true,
                        "key": "ukUnknown",
                        "defaultValue": false,
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "checkbox",
                        "$$hashKey": "object:152402",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        },
                        "style": {
                          "margin-left": "10%"
                        }
                      },
                      {
                        "key": "html8",
                        "input": false,
                        "tag": "p",
                        "attrs": [
                          {
                            "value": "",
                            "attr": ""
                          }
                        ],
                        "className": "",
                        "content": "Certification Period",
                        "type": "htmlelement",
                        "$$hashKey": "object:154633",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      },
                      {
                        "input": false,
                        "key": "columns13",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "label": "From",
                                "key": "from",
                                "placeholder": "",
                                "format": "yyyy-MM-dd hh:mm",
                                "enableDate": true,
                                "enableTime": true,
                                "defaultDate": "",
                                "datepickerMode": "day",
                                "datePicker": {
                                  "showWeeks": true,
                                  "startingDay": 0,
                                  "initDate": "",
                                  "minMode": "day",
                                  "maxMode": "year",
                                  "yearRange": "20",
                                  "datepickerMode": "day"
                                },
                                "timePicker": {
                                  "hourStep": 1,
                                  "minuteStep": 1,
                                  "showMeridian": true,
                                  "readonlyInput": false,
                                  "mousewheel": true,
                                  "arrowkeys": true
                                },
                                "protected": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "custom": ""
                                },
                                "type": "datetime",
                                "$$hashKey": "object:164681",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:156848"
                          },
                          {
                            "components": [
                              {
                                "input": true,
                                "tableView": true,
                                "label": "To",
                                "key": "to1",
                                "placeholder": "",
                                "format": "yyyy-MM-dd hh:mm",
                                "enableDate": true,
                                "enableTime": true,
                                "defaultDate": "",
                                "datepickerMode": "day",
                                "datePicker": {
                                  "showWeeks": true,
                                  "startingDay": 0,
                                  "initDate": "",
                                  "minMode": "day",
                                  "maxMode": "year",
                                  "yearRange": "20",
                                  "datepickerMode": "day"
                                },
                                "timePicker": {
                                  "hourStep": 1,
                                  "minuteStep": 1,
                                  "showMeridian": true,
                                  "readonlyInput": false,
                                  "mousewheel": true,
                                  "arrowkeys": true
                                },
                                "protected": false,
                                "persistent": true,
                                "validate": {
                                  "required": false,
                                  "custom": ""
                                },
                                "type": "datetime",
                                "$$hashKey": "object:167039",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:156849"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:156843",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      }
                    ],
                    "$$hashKey": "object:820"
                  }
                ]
              ],
              "header": [],
              "caption": "",
              "striped": false,
              "bordered": true,
              "hover": false,
              "condensed": true,
              "type": "table",
              "$$hashKey": "object:570",
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              }
            }
          ],
          "type": "panel",
          "$$hashKey": "object:451",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          }
        }
      ],
      "input": false,
      "key": "page2",
      "$$hashKey": "object:422",
      "theme": "default",
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      }
    }
  ],
  "display": "wizard",
  "page": 0,
  "numPages": 1
}
