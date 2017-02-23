{
  "components": [
    {
      "input": false,
      "key": "columns1",
      "columns": [
        {
          "components": [
            {
              "input": false,
              "key": "columns2",
              "columns": [
                {
                  "components": [
                    {
                      "input": false,
                      "key": "columns3",
                      "columns": [
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
                              "content": "PatientChart Notes",
                              "type": "htmlelement",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "$$hashKey": "object:49467"
                            }
                          ],
                          "$$hashKey": "object:49434"
                        },
                        {
                          "components": [],
                          "$$hashKey": "object:49435"
                        }
                      ],
                      "type": "columns",
                      "tags": [],
                      "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                      },
                      "$$hashKey": "object:49409"
                    }
                  ],
                  "$$hashKey": "object:49371"
                },
                {
                  "components": [],
                  "$$hashKey": "object:49372"
                }
              ],
              "type": "columns",
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "$$hashKey": "object:49364"
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
              "content": "Patient",
              "type": "htmlelement",
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "$$hashKey": "object:49365"
            }
          ],
          "$$hashKey": "object:49358"
        },
        {
          "components": [
            {
              "input": false,
              "key": "columns4",
              "columns": [
                {
                  "components": [],
                  "$$hashKey": "object:49385"
                },
                {
                  "components": [
                    {
                      "input": false,
                      "key": "columns5",
                      "columns": [
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "label": "",
                              "key": "selectField1",
                              "placeholder": "(select an Action)",
                              "data": {
                                "values": [
                                  {
                                    "value": "selectAnAction",
                                    "label": "(select an Action)",
                                    "$$hashKey": "object:50293"
                                  }
                                ],
                                "json": "",
                                "url": "",
                                "resource": "",
                                "custom": ""
                              },
                              "dataSrc": "values",
                              "valueProperty": "",
                              "defaultValue": "",
                              "refreshOn": "",
                              "filter": "",
                              "authenticate": false,
                              "template": "{{ item.label }}",
                              "multiple": false,
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false
                              },
                              "type": "select",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "pull-right",
                              "$$hashKey": "object:49474"
                            }
                          ],
                          "$$hashKey": "object:49439"
                        },
                        {
                          "components": [],
                          "$$hashKey": "object:49440"
                        }
                      ],
                      "type": "columns",
                      "tags": [],
                      "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                      },
                      "$$hashKey": "object:49419"
                    }
                  ],
                  "$$hashKey": "object:49386"
                }
              ],
              "type": "columns",
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "$$hashKey": "object:49378"
            },
            {
              "input": false,
              "key": "columns6",
              "columns": [
                {
                  "components": [
                    {
                      "input": false,
                      "key": "columns7",
                      "columns": [
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
                              "content": "caregiver",
                              "type": "htmlelement",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "$$hashKey": "object:49481"
                            }
                          ],
                          "$$hashKey": "object:49444"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "label": "",
                              "key": "selectField2",
                              "placeholder": "",
                              "data": {
                                "values": [
                                  {
                                    "value": "",
                                    "label": "",
                                    "$$hashKey": "object:50306"
                                  }
                                ],
                                "json": "",
                                "url": "",
                                "resource": "",
                                "custom": ""
                              },
                              "dataSrc": "values",
                              "valueProperty": "",
                              "defaultValue": "",
                              "refreshOn": "",
                              "filter": "",
                              "authenticate": false,
                              "template": "{{ item.label }}",
                              "multiple": false,
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false
                              },
                              "type": "select",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "pull-left",
                              "$$hashKey": "object:49485"
                            }
                          ],
                          "$$hashKey": "object:49445"
                        }
                      ],
                      "type": "columns",
                      "tags": [],
                      "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                      },
                      "$$hashKey": "object:49425"
                    }
                  ],
                  "$$hashKey": "object:49392"
                },
                {
                  "components": [
                    {
                      "input": false,
                      "key": "columns8",
                      "columns": [
                        {
                          "components": [
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
                              "content": "VisitDate",
                              "type": "htmlelement",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "text-right",
                              "$$hashKey": "object:49491"
                            }
                          ],
                          "$$hashKey": "object:49449"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "label": "",
                              "key": "datetimeField1",
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
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "$$hashKey": "object:49495"
                            }
                          ],
                          "$$hashKey": "object:49450"
                        }
                      ],
                      "type": "columns",
                      "tags": [],
                      "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                      },
                      "$$hashKey": "object:49429"
                    }
                  ],
                  "$$hashKey": "object:49393"
                }
              ],
              "type": "columns",
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "$$hashKey": "object:49379"
            }
          ],
          "$$hashKey": "object:49359"
        }
      ],
      "type": "columns",
      "$$hashKey": "object:1959",
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
      "tag": "strong",
      "attrs": [
        {
          "value": "",
          "attr": ""
        }
      ],
      "className": "",
      "content": "3180 Newberry Dr.ste.100",
      "type": "htmlelement",
      "$$hashKey": "object:5357",
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "customClass": "text-center"
    },
    {
      "key": "html7",
      "input": false,
      "tag": "strong",
      "attrs": [
        {
          "value": "",
          "attr": ""
        }
      ],
      "className": "",
      "content": "SanJose:CA 95118",
      "type": "htmlelement",
      "$$hashKey": "object:7175",
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "customClass": "text-center"
    },
    {
      "key": "html8",
      "input": false,
      "tag": "strong",
      "attrs": [
        {
          "value": "",
          "attr": ""
        }
      ],
      "className": "",
      "content": "Phone:800-219-0664",
      "type": "htmlelement",
      "$$hashKey": "object:7593",
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "customClass": "text-center"
    },
    {
      "key": "html9",
      "input": false,
      "tag": "strong",
      "attrs": [
        {
          "value": "",
          "attr": ""
        }
      ],
      "className": "",
      "content": "Fax408-273-6480:",
      "type": "htmlelement",
      "$$hashKey": "object:8025",
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "customClass": "text-center"
    },
    {
      "key": "html6",
      "input": false,
      "tag": "h4",
      "attrs": [
        {
          "value": "",
          "attr": ""
        }
      ],
      "className": "",
      "content": "Notice of Medicare Non-coverage",
      "type": "htmlelement",
      "$$hashKey": "object:6542",
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "customClass": "text-center",
      "lockKey": true
    },
    {
      "input": false,
      "key": "table1",
      "numRows": 6,
      "numCols": 1,
      "rows": [
        [
          {
            "components": [
              {
                "input": false,
                "key": "columns9",
                "columns": [
                  {
                    "components": [
                      {
                        "input": false,
                        "key": "columns10",
                        "columns": [
                          {
                            "components": [
                              {
                                "input": false,
                                "key": "columns11",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "key": "html10",
                                        "input": false,
                                        "tag": "p",
                                        "attrs": [
                                          {
                                            "value": "",
                                            "attr": ""
                                          }
                                        ],
                                        "className": "",
                                        "content": "PatientName:",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:12953",
                                        "tags": [],
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "customClass": "text-left"
                                      }
                                    ],
                                    "$$hashKey": "object:12451"
                                  },
                                  {
                                    "components": [
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
                                        "$$hashKey": "object:13465",
                                        "tags": []
                                      }
                                    ],
                                    "$$hashKey": "object:12452"
                                  }
                                ],
                                "type": "columns",
                                "$$hashKey": "object:12446",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:11964"
                          },
                          {
                            "components": [],
                            "$$hashKey": "object:11965"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:11959",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      }
                    ],
                    "$$hashKey": "object:10293"
                  },
                  {
                    "components": [
                      {
                        "input": false,
                        "key": "columns12",
                        "columns": [
                          {
                            "components": [],
                            "$$hashKey": "object:14076"
                          },
                          {
                            "components": [
                              {
                                "input": false,
                                "key": "columns13",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "key": "html11",
                                        "input": false,
                                        "tag": "p",
                                        "attrs": [
                                          {
                                            "value": "",
                                            "attr": ""
                                          }
                                        ],
                                        "className": "",
                                        "content": "PatientNumber",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:15203",
                                        "tags": [],
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        },
                                        "customClass": "text:right"
                                      }
                                    ],
                                    "$$hashKey": "object:14636"
                                  },
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "inputType": "text",
                                        "inputMask": "",
                                        "label": "",
                                        "key": "textField2",
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
                                        "$$hashKey": "object:15788",
                                        "tags": []
                                      }
                                    ],
                                    "$$hashKey": "object:14637"
                                  }
                                ],
                                "type": "columns",
                                "$$hashKey": "object:14631",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:14077"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:14071",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      }
                    ],
                    "$$hashKey": "object:10294"
                  }
                ],
                "type": "columns",
                "$$hashKey": "object:10288",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              }
            ],
            "$$hashKey": "object:9703"
          }
        ],
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
                        "input": false,
                        "key": "columns15",
                        "columns": [
                          {
                            "components": [
                              {
                                "key": "html12",
                                "input": false,
                                "tag": "p",
                                "attrs": [
                                  {
                                    "value": "",
                                    "attr": ""
                                  }
                                ],
                                "className": "",
                                "content": "The Effective Date of Current",
                                "type": "htmlelement",
                                "$$hashKey": "object:20820",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:20180"
                          },
                          {
                            "components": [
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
                                        "label": "",
                                        "key": "textField3",
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
                                        "$$hashKey": "object:22145",
                                        "tags": []
                                      }
                                    ],
                                    "$$hashKey": "object:21482"
                                  },
                                  {
                                    "components": [
                                      {
                                        "key": "html13",
                                        "input": false,
                                        "tag": "p",
                                        "attrs": [
                                          {
                                            "value": "",
                                            "attr": ""
                                          }
                                        ],
                                        "className": "",
                                        "content": "Services will end:",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:22903",
                                        "tags": [],
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        }
                                      }
                                    ],
                                    "$$hashKey": "object:21483"
                                  }
                                ],
                                "type": "columns",
                                "$$hashKey": "object:21477",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:20181"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:20175",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      }
                    ],
                    "$$hashKey": "object:16466"
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
                                "input": false,
                                "key": "columns18",
                                "columns": [
                                  {
                                    "components": [
                                      {
                                        "input": true,
                                        "tableView": true,
                                        "label": "",
                                        "key": "datetimeField2",
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
                                        "$$hashKey": "object:26988",
                                        "tags": [],
                                        "conditional": {
                                          "show": "",
                                          "when": null,
                                          "eq": ""
                                        }
                                      }
                                    ],
                                    "$$hashKey": "object:26252"
                                  },
                                  {
                                    "components": [],
                                    "$$hashKey": "object:26253"
                                  }
                                ],
                                "type": "columns",
                                "$$hashKey": "object:26247",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                }
                              }
                            ],
                            "$$hashKey": "object:24350"
                          },
                          {
                            "components": [],
                            "$$hashKey": "object:24351"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:24345",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      }
                    ],
                    "$$hashKey": "object:16467"
                  }
                ],
                "type": "columns",
                "$$hashKey": "object:16461",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              }
            ],
            "$$hashKey": "object:9709"
          }
        ],
        [
          {
            "components": [],
            "$$hashKey": "object:9715"
          }
        ],
        [
          {
            "components": [
              {
                "key": "html14",
                "input": false,
                "tag": "h4",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "Your Right to Appeal This Decision",
                "type": "htmlelement",
                "$$hashKey": "object:27849",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html15",
                "input": false,
                "tag": "li",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "You have the right to an immediate, independent medical review (appeal) of the decision to end Medicare coverage of these services. Your services will continue during the appeal.",
                "type": "htmlelement",
                "$$hashKey": "object:29066",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html16",
                "input": false,
                "tag": "li",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "If you choose to appeal, the independent reviewer will ask for your opinion. The reviewer also will look at your medical records and/or other relevant information. You do not have to prepare anything in writing, but you have the right to do so if you wish.",
                "type": "htmlelement",
                "$$hashKey": "object:29882",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html17",
                "input": false,
                "tag": "li",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "If you choose to appeal, you and the independent reviewer will each receive a copy of the detailed explanation about why your coverage for services should not continue. You will receive this detailed notice only after you request an appeal",
                "type": "htmlelement",
                "$$hashKey": "object:30706",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html18",
                "input": false,
                "tag": "li",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "If you choose to appeal, and the independent reviewer agrees services should no longer be covered after the effective date indicated above;Neither Medicare nor your plan will pay for these services after that date.",
                "type": "htmlelement",
                "$$hashKey": "object:31541",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html19",
                "input": false,
                "tag": "li",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "If you stop services no later than the effective date indicated above, you will avoid financial liability.",
                "type": "htmlelement",
                "$$hashKey": "object:34549",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              }
            ],
            "$$hashKey": "object:10031"
          }
        ],
        [
          {
            "components": [
              {
                "key": "html20",
                "input": false,
                "tag": "h4",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "How to Ask For an Immediate Appeal",
                "type": "htmlelement",
                "$$hashKey": "object:35428",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html21",
                "input": false,
                "tag": "li",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "You must make your request to your Quality Improvement Organization (also known as a QIO). A QIO is the independent reviewer authorized by Medicare to review the decision to end these services.",
                "type": "htmlelement",
                "$$hashKey": "object:36296",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html22",
                "input": false,
                "tag": "li",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "Your request for an immediate appeal should be made as soon as possible, but no later than noon of the day before the effective date indicated above.",
                "type": "htmlelement",
                "$$hashKey": "object:37175",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html23",
                "input": false,
                "tag": "li",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "The QIO will notify you of its decision as soon as possible, generally no later than two days after the effective date of this notice if you are in Original Medicare. If you are in a Medicare health plan, the QIO generally will notify you of its decision by the effective date of this notice.",
                "type": "htmlelement",
                "$$hashKey": "object:38065",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html24",
                "input": false,
                "tag": "li",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "Call your QIO at: Livanta at 1-866-815-5440 or TDD:1-866-868-2289 to appeal, or if you have questions.",
                "type": "htmlelement",
                "$$hashKey": "object:38966",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              },
              {
                "key": "html25",
                "input": false,
                "tag": "strong",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "See page 2 of this notice for more information.",
                "type": "htmlelement",
                "$$hashKey": "object:39878",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "customClass": "text-center"
              },
              {
                "input": false,
                "key": "columns19",
                "columns": [
                  {
                    "components": [
                      {
                        "input": false,
                        "key": "columns20",
                        "columns": [
                          {
                            "components": [
                              {
                                "key": "html26",
                                "input": false,
                                "tag": "p",
                                "attrs": [
                                  {
                                    "value": "",
                                    "attr": ""
                                  }
                                ],
                                "className": "",
                                "content": "Form CMS 10123-NOMNC (Approved 12/31/2011)",
                                "type": "htmlelement",
                                "$$hashKey": "object:42667",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "customClass": "text-left"
                              }
                            ],
                            "$$hashKey": "object:41735"
                          },
                          {
                            "components": [],
                            "$$hashKey": "object:41736"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:41730",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      }
                    ],
                    "$$hashKey": "object:40810"
                  },
                  {
                    "components": [
                      {
                        "input": false,
                        "key": "columns21",
                        "columns": [
                          {
                            "components": [],
                            "$$hashKey": "object:43622"
                          },
                          {
                            "components": [
                              {
                                "key": "html27",
                                "input": false,
                                "tag": "p",
                                "attrs": [
                                  {
                                    "value": "",
                                    "attr": ""
                                  }
                                ],
                                "className": "",
                                "content": "OMB approval 0938-0953",
                                "type": "htmlelement",
                                "$$hashKey": "object:44600",
                                "tags": [],
                                "conditional": {
                                  "show": "",
                                  "when": null,
                                  "eq": ""
                                },
                                "customClass": "text-right"
                              }
                            ],
                            "$$hashKey": "object:43623"
                          }
                        ],
                        "type": "columns",
                        "$$hashKey": "object:43617",
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      }
                    ],
                    "$$hashKey": "object:40811"
                  }
                ],
                "type": "columns",
                "$$hashKey": "object:40805",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              }
            ],
            "$$hashKey": "object:10043"
          }
        ],
        [
          {
            "components": [
              {
                "input": false,
                "key": "columns22",
                "columns": [
                  {
                    "components": [
                      {
                        "key": "html28",
                        "input": false,
                        "tag": "strong",
                        "attrs": [
                          {
                            "value": "",
                            "attr": ""
                          }
                        ],
                        "className": "",
                        "content": "Patient's Signature",
                        "type": "htmlelement",
                        "$$hashKey": "object:46556",
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
                        "label": "Signature",
                        "key": "signature1",
                        "placeholder": "",
                        "footer": "Sign above",
                        "width": "50%",
                        "height": "150px",
                        "penColor": "black",
                        "backgroundColor": "rgb(245,245,235)",
                        "minWidth": "0.5",
                        "maxWidth": "2.5",
                        "protected": false,
                        "persistent": true,
                        "validate": {
                          "required": false
                        },
                        "type": "signature",
                        "$$hashKey": "object:47554",
                        "hideLabel": true,
                        "tags": [],
                        "conditional": {
                          "show": "",
                          "when": null,
                          "eq": ""
                        }
                      }
                    ],
                    "$$hashKey": "object:45578"
                  },
                  {
                    "components": [],
                    "$$hashKey": "object:45579"
                  }
                ],
                "type": "columns",
                "$$hashKey": "object:45573",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              }
            ],
            "$$hashKey": "object:10055"
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
      "$$hashKey": "object:9692",
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      }
    },
    {
      "input": false,
      "key": "columns23",
      "columns": [
        {
          "components": [
            {
              "input": true,
              "label": "save",
              "tableView": false,
              "key": "save",
              "size": "md",
              "leftIcon": "",
              "rightIcon": "",
              "block": false,
              "action": "submit",
              "disableOnInvalid": false,
              "theme": "default",
              "type": "button",
              "$$hashKey": "object:52348",
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "customClass": "pull-right"
            }
          ],
          "$$hashKey": "object:51299"
        },
        {
          "components": [
            {
              "input": true,
              "label": "complete",
              "tableView": false,
              "key": "complete",
              "size": "md",
              "leftIcon": "",
              "rightIcon": "",
              "block": false,
              "action": "submit",
              "disableOnInvalid": false,
              "theme": "default",
              "type": "button",
              "$$hashKey": "object:53437",
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "customClass": "pull-left"
            }
          ],
          "$$hashKey": "object:51300"
        }
      ],
      "type": "columns",
      "$$hashKey": "object:51294",
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      }
    }
  ],
  "display": "form",
  "page": 0
}