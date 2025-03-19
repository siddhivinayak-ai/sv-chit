// Data structure for colleges, branches, semesters, and subjects with Google Drive links
const data = {
    "COEP Technological University": {
        "Manufacturing": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 2": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
            "Semester 3": {
                "TOM": "https://drive.google.com/drive/folders/1eL2wI1hlBgt3YpIp36oIavU1BfDDrGIT",
                "SOM": "https://drive.google.com/drive/folders/1BDZ-6INNw9_L5p4_s0GkeVZBuAmimHw-",
                "MST": "https://drive.google.com/drive/folders/19Hn6L65CpKAKltv5pRi4b0QyM5Z6yyS1",
            },
            "Semester 4": {
                "MST": "https://drive.google.com/drive/folders/1PB45Ieg0AR7xmyKV7vbD9lgrryDfX42j?usp=drive_link",
                "ETHT": "https://drive.google.com/drive/folders/1QE4x7NLk_NDH5wzezdYK_qv4gjY4VFRw?usp=drive_link",
                "FP": "https://drive.google.com/drive/folders/102DwEb9_HxflnwSeCQjbzsji-_pgbuLQ?usp=drive_link",
                "DOME": "https://drive.google.com/drive/folders/1Bv4fra7AsEDZ-_Mf84zx52QWRK7UMpA4?usp=drive_link"
            },
            "Semester 5": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 6": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
            "Semester 7": {
                "TOM": "https://drive.google.com/drive/folders/1eL2wI1hlBgt3YpIp36oIavU1BfDDrGIT",
                "SOM": "https://drive.google.com/drive/folders/1BDZ-6INNw9_L5p4_s0GkeVZBuAmimHw-",
                "MST": "https://drive.google.com/drive/folders/19Hn6L65CpKAKltv5pRi4b0QyM5Z6yyS1",
            },
            "Semester 8": {
                "MST": "https://drive.google.com/drive/folders/1PB45Ieg0AR7xmyKV7vbD9lgrryDfX42j?usp=drive_link",
                "ETHT": "https://drive.google.com/drive/folders/1QE4x7NLk_NDH5wzezdYK_qv4gjY4VFRw?usp=drive_link",
                "FP": "https://drive.google.com/drive/folders/102DwEb9_HxflnwSeCQjbzsji-_pgbuLQ?usp=drive_link",
                "DOME": "https://drive.google.com/drive/folders/1Bv4fra7AsEDZ-_Mf84zx52QWRK7UMpA4?usp=drive_link"
            },
        },
        "Computer Science": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Electrical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Mechanical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Civil": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "EnTC": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Metallurgy": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Instrumentation": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
    },

    "VNIT Nagpur": {
        "Manufacturing": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 2": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
            "Semester 3": {
                "TOM": "https://drive.google.com/drive/folders/1eL2wI1hlBgt3YpIp36oIavU1BfDDrGIT",
                "SOM": "https://drive.google.com/drive/folders/1BDZ-6INNw9_L5p4_s0GkeVZBuAmimHw-",
                "MST": "https://drive.google.com/drive/folders/19Hn6L65CpKAKltv5pRi4b0QyM5Z6yyS1",
            },
            "Semester 4": {
                "MST": "https://drive.google.com/drive/folders/1PB45Ieg0AR7xmyKV7vbD9lgrryDfX42j?usp=drive_link",
                "ETHT": "https://drive.google.com/drive/folders/1QE4x7NLk_NDH5wzezdYK_qv4gjY4VFRw?usp=drive_link",
                "FP": "https://drive.google.com/drive/folders/102DwEb9_HxflnwSeCQjbzsji-_pgbuLQ?usp=drive_link",
                "DOME": "https://drive.google.com/drive/folders/1Bv4fra7AsEDZ-_Mf84zx52QWRK7UMpA4?usp=drive_link"
            },
            "Semester 5": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 6": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
            "Semester 7": {
                "TOM": "https://drive.google.com/drive/folders/1eL2wI1hlBgt3YpIp36oIavU1BfDDrGIT",
                "SOM": "https://drive.google.com/drive/folders/1BDZ-6INNw9_L5p4_s0GkeVZBuAmimHw-",
                "MST": "https://drive.google.com/drive/folders/19Hn6L65CpKAKltv5pRi4b0QyM5Z6yyS1",
            },
            "Semester 8": {
                "MST": "https://drive.google.com/drive/folders/1PB45Ieg0AR7xmyKV7vbD9lgrryDfX42j?usp=drive_link",
                "ETHT": "https://drive.google.com/drive/folders/1QE4x7NLk_NDH5wzezdYK_qv4gjY4VFRw?usp=drive_link",
                "FP": "https://drive.google.com/drive/folders/102DwEb9_HxflnwSeCQjbzsji-_pgbuLQ?usp=drive_link",
                "DOME": "https://drive.google.com/drive/folders/1Bv4fra7AsEDZ-_Mf84zx52QWRK7UMpA4?usp=drive_link"
            },
        },
        "Computer Science": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Electrical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Mechanical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Civil": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "EnTC": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Metallurgy": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Instrumentation": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
    },
    "PICT": {
        "Computer": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 2": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
            "Semester 3": {
                "TOM": "https://drive.google.com/drive/folders/1eL2wI1hlBgt3YpIp36oIavU1BfDDrGIT",
                "SOM": "https://drive.google.com/drive/folders/1BDZ-6INNw9_L5p4_s0GkeVZBuAmimHw-",
                "MST": "https://drive.google.com/drive/folders/19Hn6L65CpKAKltv5pRi4b0QyM5Z6yyS1",
            },
            "Semester 4": {
                "MST": "https://drive.google.com/drive/folders/1PB45Ieg0AR7xmyKV7vbD9lgrryDfX42j?usp=drive_link",
                "ETHT": "https://drive.google.com/drive/folders/1QE4x7NLk_NDH5wzezdYK_qv4gjY4VFRw?usp=drive_link",
                "FP": "https://drive.google.com/drive/folders/102DwEb9_HxflnwSeCQjbzsji-_pgbuLQ?usp=drive_link",
                "DOME": "https://drive.google.com/drive/folders/1Bv4fra7AsEDZ-_Mf84zx52QWRK7UMpA4?usp=drive_link"
            },
            "Semester 5": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 6": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
            "Semester 7": {
                "TOM": "https://drive.google.com/drive/folders/1eL2wI1hlBgt3YpIp36oIavU1BfDDrGIT",
                "SOM": "https://drive.google.com/drive/folders/1BDZ-6INNw9_L5p4_s0GkeVZBuAmimHw-",
                "MST": "https://drive.google.com/drive/folders/19Hn6L65CpKAKltv5pRi4b0QyM5Z6yyS1",
            },
            "Semester 8": {
                "MST": "https://drive.google.com/drive/folders/1PB45Ieg0AR7xmyKV7vbD9lgrryDfX42j?usp=drive_link",
                "ETHT": "https://drive.google.com/drive/folders/1QE4x7NLk_NDH5wzezdYK_qv4gjY4VFRw?usp=drive_link",
                "FP": "https://drive.google.com/drive/folders/102DwEb9_HxflnwSeCQjbzsji-_pgbuLQ?usp=drive_link",
                "DOME": "https://drive.google.com/drive/folders/1Bv4fra7AsEDZ-_Mf84zx52QWRK7UMpA4?usp=drive_link"
            },
        },
        "Manufacturing  ": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Electrical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Mechanical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Civil": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "EnTC": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Metallurgy": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        "Instrumentation": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
    },

    "VNIT Nagpur": {
        "Mechnical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 2": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
        },
        "Computer Science": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        
       
    },

    "VJTI ": {
        "Mechnical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 2": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
        },
        "Computer Science": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        
       
    },
    "RCOEM": {
        "Mechnical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 2": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
        },
        "Computer Science": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        
       
    },
    "BITS Pilani": {
        "Mechnical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 2": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
        },
        "Computer Science": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        
       
    },
    "IIIT Pune": {
        "Mechnical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 2": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
        },
        "Computer Science": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        
       
    },
    "KJ Somaiya ": {
        "Mechnical": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-Sem1",
                "Chemistry": "https://drive.google.com/link-to-Chemistry-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-Sem1"
            },
            "Semester 2": {
                "Math 2": "https://drive.google.com/link-to-Math2-Sem2",
                "Basic Electrical": "https://drive.google.com/link-to-BasicElectrical-Sem2",
                "Mechanics": "https://drive.google.com/link-to-Mechanics-Sem2",
                "Computer Programming": "https://drive.google.com/link-to-ComputerProgramming-Sem2"
            },
        },
        "Computer Science": {
            "Semester 1": {
                "Math": "https://drive.google.com/link-to-Math-CS-Sem1",
                "Physics": "https://drive.google.com/link-to-Physics-CS-Sem1",
                "C Programming": "https://drive.google.com/link-to-CProgramming-CS-Sem1",
                "Engineering Drawing": "https://drive.google.com/link-to-EnggDrawing-CS-Sem1"
            },
            "Semester 2": {
                "Data Structures": "https://drive.google.com/link-to-DataStructures",
                "OOPS": "https://drive.google.com/link-to-OOPS",
                "DBMS": "https://drive.google.com/link-to-DBMS",
                "Operating Systems": "https://drive.google.com/link-to-OperatingSystems"
            }
        },
        
       
    },
};

// Initialize Homepage with College Cards
function loadColleges() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    for (let college in data) {
        content.innerHTML += `<div class="card" onclick="showBranches('${college}')">${college}</div>`;
    }
}

// Show Branches for Selected College
function showBranches(college) {
    let content = document.getElementById("content");
    content.innerHTML = "";
    for (let branch in data[college]) {
        content.innerHTML += `<div class="card" onclick="showSemesters('${college}', '${branch}')">${branch}</div>`;
    }
    showBackButton(() => loadColleges());
}

// Show Semesters for Selected Branch
function showSemesters(college, branch) {
    let content = document.getElementById("content");
    content.innerHTML = "";
    for (let semester in data[college][branch]) {
        content.innerHTML += `<div class="card" onclick="showSubjects('${college}', '${branch}', '${semester}')">${semester}</div>`;
    }
    showBackButton(() => showBranches(college));
}

// Show Subjects for Selected Semester
function showSubjects(college, branch, semester) {
    let content = document.getElementById("content");
    content.innerHTML = "";
    for (let subject in data[college][branch][semester]) {
        let driveLink = data[college][branch][semester][subject];
        content.innerHTML += `<div class="card" onclick="redirectToDrive('${driveLink}')">${subject}</div>`;
    }
    showBackButton(() => showSemesters(college, branch));
}

// Redirect to Google Drive Link
function redirectToDrive(link) {
    window.location.href = link;
}

// Show Back Button and Set Functionality
function showBackButton(action) {
    let backButton = document.getElementById("backButton");
    backButton.style.display = "block";
    backButton.onclick = action;
}

// Load colleges on page load
window.onload = loadColleges;
