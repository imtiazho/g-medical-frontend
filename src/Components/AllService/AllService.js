import React from 'react';
import s1 from '../../assets/lungs.png';
import s2 from '../../assets/heart.png';
import s3 from '../../assets/orthopedic.png';
import s4 from '../../assets/general-sergery.png';
import s5 from '../../assets/pharmecy.png';
import s6 from '../../assets/sports-injury.png';
import s7 from '../../assets/fever-flu.png';
import s8 from '../../assets/dental.png';
import s9 from '../../assets/eye-care.png';
import { Link } from 'react-router-dom';

const AllService = () => {

    const data = [
        {
            _id: "1",
            serviceIcon: s1,
            serviceName: "Lung Diseases",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: "qa1",
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa2",
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa3",
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa4",
                    title: "For the respiratory system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
            ],
            serviceAnotherPoint: "Chest CT Scan",
            serviceAnotherPointSubtitle: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society",
            serviceAnotherPointDetails: "One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.",
            treatmentPriceList1: [
                {
                    _id: "pl1",
                    treatmentName: "Heart Cardioversion",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl2",
                    treatmentName: "Dupuytren's Fasciectomy",
                    treatmentPrice: "999.00"
                },
                {
                    _id: "pl3",
                    treatmentName: "Hip Resurfacing Surgery",
                    treatmentPrice: "3900.00"
                },
                {
                    _id: "pl4",
                    treatmentName: "Laparoscopy",
                    treatmentPrice: "2700.00"
                },
                {
                    _id: "pl5",
                    treatmentName: "Knee Arthroscopy",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl6",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ],
            treatmentPriceList2: [
                {
                    _id: "pl7",
                    treatmentName: "Kidney Stone Treatment",
                    treatmentPrice: "4700.00"
                },
                {
                    _id: "pl8",
                    treatmentName: "Pain management",
                    treatmentPrice: "1199.00"
                },
                {
                    _id: "pl9",
                    treatmentName: "Prostate Cancer",
                    treatmentPrice: "4400.00"
                },
                {
                    _id: "pl10",
                    treatmentName: "Radiology",
                    treatmentPrice: "2500.00"
                },
                {
                    _id: "pl11",
                    treatmentName: "Removing wisdom teeth",
                    treatmentPrice: "2400.00"
                },
                {
                    _id: "pl12",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ]

        },
        {
            _id: "2",
            serviceIcon: s2,
            serviceName: "Heart Diseases",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: "qa1",
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa2",
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa3",
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa4",
                    title: "For the respiratory system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
            ],
            serviceAnotherPoint: "Chest CT Scan",
            serviceAnotherPointSubtitle: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society",
            serviceAnotherPointDetails: "One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.",
            treatmentPriceList1: [
                {
                    _id: "pl1",
                    treatmentName: "Heart Cardioversion",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl2",
                    treatmentName: "Dupuytren's Fasciectomy",
                    treatmentPrice: "999.00"
                },
                {
                    _id: "pl3",
                    treatmentName: "Hip Resurfacing Surgery",
                    treatmentPrice: "3900.00"
                },
                {
                    _id: "pl4",
                    treatmentName: "Laparoscopy",
                    treatmentPrice: "2700.00"
                },
                {
                    _id: "pl5",
                    treatmentName: "Knee Arthroscopy",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl6",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ],
            treatmentPriceList2: [
                {
                    _id: "pl7",
                    treatmentName: "Kidney Stone Treatment",
                    treatmentPrice: "4700.00"
                },
                {
                    _id: "pl8",
                    treatmentName: "Pain management",
                    treatmentPrice: "1199.00"
                },
                {
                    _id: "pl9",
                    treatmentName: "Prostate Cancer",
                    treatmentPrice: "4400.00"
                },
                {
                    _id: "pl10",
                    treatmentName: "Radiology",
                    treatmentPrice: "2500.00"
                },
                {
                    _id: "pl11",
                    treatmentName: "Removing wisdom teeth",
                    treatmentPrice: "2400.00"
                },
                {
                    _id: "pl12",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ]
        },
        {
            _id: "3",
            serviceIcon: s3,
            serviceName: "Orthopaedic",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: "qa1",
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa2",
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa3",
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa4",
                    title: "For the respiratory system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
            ],
            serviceAnotherPoint: "Chest CT Scan",
            serviceAnotherPointSubtitle: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society",
            serviceAnotherPointDetails: "One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.",
            treatmentPriceList1: [
                {
                    _id: "pl1",
                    treatmentName: "Heart Cardioversion",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl2",
                    treatmentName: "Dupuytren's Fasciectomy",
                    treatmentPrice: "999.00"
                },
                {
                    _id: "pl3",
                    treatmentName: "Hip Resurfacing Surgery",
                    treatmentPrice: "3900.00"
                },
                {
                    _id: "pl4",
                    treatmentName: "Laparoscopy",
                    treatmentPrice: "2700.00"
                },
                {
                    _id: "pl5",
                    treatmentName: "Knee Arthroscopy",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl6",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ],
            treatmentPriceList2: [
                {
                    _id: "pl7",
                    treatmentName: "Kidney Stone Treatment",
                    treatmentPrice: "4700.00"
                },
                {
                    _id: "pl8",
                    treatmentName: "Pain management",
                    treatmentPrice: "1199.00"
                },
                {
                    _id: "pl9",
                    treatmentName: "Prostate Cancer",
                    treatmentPrice: "4400.00"
                },
                {
                    _id: "pl10",
                    treatmentName: "Radiology",
                    treatmentPrice: "2500.00"
                },
                {
                    _id: "pl11",
                    treatmentName: "Removing wisdom teeth",
                    treatmentPrice: "2400.00"
                },
                {
                    _id: "pl12",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ]
        },
        {
            _id: "4",
            serviceIcon: s4,
            serviceName: "General Surgery",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: "qa1",
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa2",
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa3",
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa4",
                    title: "For the respiratory system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
            ],
            serviceAnotherPoint: "Chest CT Scan",
            serviceAnotherPointSubtitle: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society",
            serviceAnotherPointDetails: "One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.",
            treatmentPriceList1: [
                {
                    _id: "pl1",
                    treatmentName: "Heart Cardioversion",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl2",
                    treatmentName: "Dupuytren's Fasciectomy",
                    treatmentPrice: "999.00"
                },
                {
                    _id: "pl3",
                    treatmentName: "Hip Resurfacing Surgery",
                    treatmentPrice: "3900.00"
                },
                {
                    _id: "pl4",
                    treatmentName: "Laparoscopy",
                    treatmentPrice: "2700.00"
                },
                {
                    _id: "pl5",
                    treatmentName: "Knee Arthroscopy",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl6",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ],
            treatmentPriceList2: [
                {
                    _id: "pl7",
                    treatmentName: "Kidney Stone Treatment",
                    treatmentPrice: "4700.00"
                },
                {
                    _id: "pl8",
                    treatmentName: "Pain management",
                    treatmentPrice: "1199.00"
                },
                {
                    _id: "pl9",
                    treatmentName: "Prostate Cancer",
                    treatmentPrice: "4400.00"
                },
                {
                    _id: "pl10",
                    treatmentName: "Radiology",
                    treatmentPrice: "2500.00"
                },
                {
                    _id: "pl11",
                    treatmentName: "Removing wisdom teeth",
                    treatmentPrice: "2400.00"
                },
                {
                    _id: "pl12",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ]
        },
        {
            _id: "5",
            serviceIcon: s5,
            serviceName: "Pharmacy",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: "qa1",
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa2",
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa3",
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa4",
                    title: "For the respiratory system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
            ],
            serviceAnotherPoint: "Chest CT Scan",
            serviceAnotherPointSubtitle: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society",
            serviceAnotherPointDetails: "One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.",
            treatmentPriceList1: [
                {
                    _id: "pl1",
                    treatmentName: "Heart Cardioversion",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl2",
                    treatmentName: "Dupuytren's Fasciectomy",
                    treatmentPrice: "999.00"
                },
                {
                    _id: "pl3",
                    treatmentName: "Hip Resurfacing Surgery",
                    treatmentPrice: "3900.00"
                },
                {
                    _id: "pl4",
                    treatmentName: "Laparoscopy",
                    treatmentPrice: "2700.00"
                },
                {
                    _id: "pl5",
                    treatmentName: "Knee Arthroscopy",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl6",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ],
            treatmentPriceList2: [
                {
                    _id: "pl7",
                    treatmentName: "Kidney Stone Treatment",
                    treatmentPrice: "4700.00"
                },
                {
                    _id: "pl8",
                    treatmentName: "Pain management",
                    treatmentPrice: "1199.00"
                },
                {
                    _id: "pl9",
                    treatmentName: "Prostate Cancer",
                    treatmentPrice: "4400.00"
                },
                {
                    _id: "pl10",
                    treatmentName: "Radiology",
                    treatmentPrice: "2500.00"
                },
                {
                    _id: "pl11",
                    treatmentName: "Removing wisdom teeth",
                    treatmentPrice: "2400.00"
                },
                {
                    _id: "pl12",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ]
        },
        {
            _id: "6",
            serviceIcon: s6,
            serviceName: "Sports Injury",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: "qa1",
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa2",
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa3",
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa4",
                    title: "For the respiratory system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
            ],
            serviceAnotherPoint: "Chest CT Scan",
            serviceAnotherPointSubtitle: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society",
            serviceAnotherPointDetails: "One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.",
            treatmentPriceList1: [
                {
                    _id: "pl1",
                    treatmentName: "Heart Cardioversion",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl2",
                    treatmentName: "Dupuytren's Fasciectomy",
                    treatmentPrice: "999.00"
                },
                {
                    _id: "pl3",
                    treatmentName: "Hip Resurfacing Surgery",
                    treatmentPrice: "3900.00"
                },
                {
                    _id: "pl4",
                    treatmentName: "Laparoscopy",
                    treatmentPrice: "2700.00"
                },
                {
                    _id: "pl5",
                    treatmentName: "Knee Arthroscopy",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl6",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ],
            treatmentPriceList2: [
                {
                    _id: "pl7",
                    treatmentName: "Kidney Stone Treatment",
                    treatmentPrice: "4700.00"
                },
                {
                    _id: "pl8",
                    treatmentName: "Pain management",
                    treatmentPrice: "1199.00"
                },
                {
                    _id: "pl9",
                    treatmentName: "Prostate Cancer",
                    treatmentPrice: "4400.00"
                },
                {
                    _id: "pl10",
                    treatmentName: "Radiology",
                    treatmentPrice: "2500.00"
                },
                {
                    _id: "pl11",
                    treatmentName: "Removing wisdom teeth",
                    treatmentPrice: "2400.00"
                },
                {
                    _id: "pl12",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ]
        },
        {
            _id: "7",
            serviceIcon: s7,
            serviceName: "Fever & Flu",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: "qa1",
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa2",
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa3",
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa4",
                    title: "For the respiratory system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
            ],
            serviceAnotherPoint: "Chest CT Scan",
            serviceAnotherPointSubtitle: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society",
            serviceAnotherPointDetails: "One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.",
            treatmentPriceList1: [
                {
                    _id: "pl1",
                    treatmentName: "Heart Cardioversion",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl2",
                    treatmentName: "Dupuytren's Fasciectomy",
                    treatmentPrice: "999.00"
                },
                {
                    _id: "pl3",
                    treatmentName: "Hip Resurfacing Surgery",
                    treatmentPrice: "3900.00"
                },
                {
                    _id: "pl4",
                    treatmentName: "Laparoscopy",
                    treatmentPrice: "2700.00"
                },
                {
                    _id: "pl5",
                    treatmentName: "Knee Arthroscopy",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl6",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ],
            treatmentPriceList2: [
                {
                    _id: "pl7",
                    treatmentName: "Kidney Stone Treatment",
                    treatmentPrice: "4700.00"
                },
                {
                    _id: "pl8",
                    treatmentName: "Pain management",
                    treatmentPrice: "1199.00"
                },
                {
                    _id: "pl9",
                    treatmentName: "Prostate Cancer",
                    treatmentPrice: "4400.00"
                },
                {
                    _id: "pl10",
                    treatmentName: "Radiology",
                    treatmentPrice: "2500.00"
                },
                {
                    _id: "pl11",
                    treatmentName: "Removing wisdom teeth",
                    treatmentPrice: "2400.00"
                },
                {
                    _id: "pl12",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ]
        },
        {
            _id: "8",
            serviceIcon: s8,
            serviceName: "Dental Service",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: "qa1",
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa2",
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa3",
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa4",
                    title: "For the respiratory system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
            ],
            serviceAnotherPoint: "Chest CT Scan",
            serviceAnotherPointSubtitle: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society",
            serviceAnotherPointDetails: "One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.",
            treatmentPriceList1: [
                {
                    _id: "pl1",
                    treatmentName: "Heart Cardioversion",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl2",
                    treatmentName: "Dupuytren's Fasciectomy",
                    treatmentPrice: "999.00"
                },
                {
                    _id: "pl3",
                    treatmentName: "Hip Resurfacing Surgery",
                    treatmentPrice: "3900.00"
                },
                {
                    _id: "pl4",
                    treatmentName: "Laparoscopy",
                    treatmentPrice: "2700.00"
                },
                {
                    _id: "pl5",
                    treatmentName: "Knee Arthroscopy",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl6",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ],
            treatmentPriceList2: [
                {
                    _id: "pl7",
                    treatmentName: "Kidney Stone Treatment",
                    treatmentPrice: "4700.00"
                },
                {
                    _id: "pl8",
                    treatmentName: "Pain management",
                    treatmentPrice: "1199.00"
                },
                {
                    _id: "pl9",
                    treatmentName: "Prostate Cancer",
                    treatmentPrice: "4400.00"
                },
                {
                    _id: "pl10",
                    treatmentName: "Radiology",
                    treatmentPrice: "2500.00"
                },
                {
                    _id: "pl11",
                    treatmentName: "Removing wisdom teeth",
                    treatmentPrice: "2400.00"
                },
                {
                    _id: "pl12",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ]
        },
        {
            _id: "9",
            serviceIcon: s9,
            serviceName: "Eye Care",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: "qa1",
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa2",
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa3",
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: "qa4",
                    title: "For the respiratory system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
            ],
            serviceAnotherPoint: "Chest CT Scan",
            serviceAnotherPointSubtitle: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society",
            serviceAnotherPointDetails: "One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.",
            treatmentPriceList1: [
                {
                    _id: "pl1",
                    treatmentName: "Heart Cardioversion",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl2",
                    treatmentName: "Dupuytren's Fasciectomy",
                    treatmentPrice: "999.00"
                },
                {
                    _id: "pl3",
                    treatmentName: "Hip Resurfacing Surgery",
                    treatmentPrice: "3900.00"
                },
                {
                    _id: "pl4",
                    treatmentName: "Laparoscopy",
                    treatmentPrice: "2700.00"
                },
                {
                    _id: "pl5",
                    treatmentName: "Knee Arthroscopy",
                    treatmentPrice: "1700.00"
                },
                {
                    _id: "pl6",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ],
            treatmentPriceList2: [
                {
                    _id: "pl7",
                    treatmentName: "Kidney Stone Treatment",
                    treatmentPrice: "4700.00"
                },
                {
                    _id: "pl8",
                    treatmentName: "Pain management",
                    treatmentPrice: "1199.00"
                },
                {
                    _id: "pl9",
                    treatmentName: "Prostate Cancer",
                    treatmentPrice: "4400.00"
                },
                {
                    _id: "pl10",
                    treatmentName: "Radiology",
                    treatmentPrice: "2500.00"
                },
                {
                    _id: "pl11",
                    treatmentName: "Removing wisdom teeth",
                    treatmentPrice: "2400.00"
                },
                {
                    _id: "pl12",
                    treatmentName: "Local anaesthetic",
                    treatmentPrice: "2300.00"
                },
            ]
        }
    ]

    return (
        <div className='w-5/6 mx-auto mt-20'>
            <div className='grid grid-cols-3 gap-16'>
                {
                    data.map(eachData =>
                        <div className='flex flex flex-col gap-6'>
                            <div className='w-1/2'>
                                <img src={eachData.serviceIcon} alt="" />
                            </div>
                            <h3 className='text-2xl text-black font-medium'>{eachData.serviceName}</h3>
                            <p className='text-secondary'>{eachData.shortDetails}</p>
                            <Link to={`/service/${eachData._id}`} className='text-primary text-lg font-medium'>Learn More </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllService;