import React from 'react';
import { Link, useParams } from 'react-router-dom';
import serviceBanner from '../../assets/service-banner.jpg';
import generalSergery from '../../assets/General-Surgery.jpg';
import deptIcon1 from '../../assets/department-icon-1.png';
import deptIcon2 from '../../assets/department-icon-2.png';
import deptIcon3 from '../../assets/department-icon-3.png';
import iconDepertment1 from '../../assets/icon-cl-dpment-1.png';
import iconDepertment2 from '../../assets/icon-cl-dpment-2.png';
import DepertmentPic from '../../assets/department-bg.jpg';
import HealthProfessional from '../HealthProfessional/HealthProfessional';
import { CiClock2 } from 'react-icons/ci';
import s1 from '../../assets/lungs.png';
import s2 from '../../assets/heart.png';
import s3 from '../../assets/orthopedic.png';
import s4 from '../../assets/general-sergery.png';
import s5 from '../../assets/pharmecy.png';
import s6 from '../../assets/sports-injury.png';
import s7 from '../../assets/fever-flu.png';
import s8 from '../../assets/dental.png';
import s9 from '../../assets/eye-care.png';
import { useQuery } from '@tanstack/react-query';
import SectionBanner from '../SectionBanner/SectionBanner';

const ServiceDetailsPage = () => {
    const { serviceId } = useParams();

    const data = [
        {
            _id: "1",
            serviceIcon: s1,
            serviceTopBannerBanner: serviceBanner,
            sargonDoctor: generalSergery,
            serviceName: "Lung Diseases",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceAboutTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xsDeptIcon: deptIcon1,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xsDeptIcon: deptIcon2,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xsDeptIcon: deptIcon3,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: 1,
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 2,
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 3,
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 4,
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
            ],
            deptHours: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ]

        },
        {
            _id: "2",
            serviceIcon: s2,
            serviceTopBannerBanner: serviceBanner,
            sargonDoctor: generalSergery,
            serviceName: "Heart Diseases",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceAboutTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xsDeptIcon: deptIcon1,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xsDeptIcon: deptIcon2,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xsDeptIcon: deptIcon3,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: 1,
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 2,
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 3,
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 4,
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
            ],
            deptHours: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ]
        },
        {
            _id: "3",
            serviceIcon: s3,
            serviceTopBannerBanner: serviceBanner,
            sargonDoctor: generalSergery,
            serviceName: "Orthopaedic",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceAboutTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xsDeptIcon: deptIcon1,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xsDeptIcon: deptIcon2,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xsDeptIcon: deptIcon3,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: 1,
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 2,
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 3,
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 4,
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
            ],
            deptHours: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ]
        },
        {
            _id: "4",
            serviceIcon: s4,
            serviceTopBannerBanner: serviceBanner,
            sargonDoctor: generalSergery,
            serviceName: "General Surgery",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceAboutTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xsDeptIcon: deptIcon1,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xsDeptIcon: deptIcon2,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xsDeptIcon: deptIcon3,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: 1,
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 2,
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 3,
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 4,
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
            ],
            deptHours: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ]
        },
        {
            _id: "5",
            serviceIcon: s5,
            serviceTopBannerBanner: serviceBanner,
            sargonDoctor: generalSergery,
            serviceName: "Pharmacy",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceAboutTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xsDeptIcon: deptIcon1,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xsDeptIcon: deptIcon2,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xsDeptIcon: deptIcon3,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: 1,
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 2,
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 3,
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 4,
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
            ],
            deptHours: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ]
        },
        {
            _id: "6",
            serviceIcon: s6,
            serviceTopBannerBanner: serviceBanner,
            sargonDoctor: generalSergery,
            serviceName: "Sports Injury",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceAboutTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xsDeptIcon: deptIcon1,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xsDeptIcon: deptIcon2,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xsDeptIcon: deptIcon3,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: 1,
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 2,
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 3,
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 4,
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
            ],
            deptHours: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ]
        },
        {
            _id: "7",
            serviceIcon: s7,
            serviceTopBannerBanner: serviceBanner,
            sargonDoctor: generalSergery,
            serviceName: "Fever & Flu",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceAboutTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xsDeptIcon: deptIcon1,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xsDeptIcon: deptIcon2,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xsDeptIcon: deptIcon3,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: 1,
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 2,
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 3,
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 4,
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
            ],
            deptHours: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ]
        },
        {
            _id: "8",
            serviceIcon: s8,
            serviceTopBannerBanner: serviceBanner,
            sargonDoctor: generalSergery,
            serviceName: "Dental Service",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceAboutTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xsDeptIcon: deptIcon1,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xsDeptIcon: deptIcon2,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xsDeptIcon: deptIcon3,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: 1,
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 2,
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 3,
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 4,
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
            ],
            deptHours: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ]
        },
        {
            _id: "9",
            serviceIcon: s9,
            serviceTopBannerBanner: serviceBanner,
            sargonDoctor: generalSergery,
            serviceName: "Eye Care",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
            serviceAboutTitle: "About Allergy Department",
            mainTheme: "Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association",
            servicePoints: ["CF-related diabetes (monthly)", "Gastrointestinal (monthly)", "CF-related liver disease (monthly)", "Sweat testing (three times per month)"],
            someDeptservice: [
                {
                    _id: "xDept1",
                    xDeptTitle: "Central Nervous System",
                    xsDeptIcon: deptIcon1,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept2",
                    xDeptTitle: "Allergic Disorders",
                    xsDeptIcon: deptIcon2,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                },
                {
                    _id: "xDept3",
                    xDeptTitle: "Neoplastic Disorders",
                    xsDeptIcon: deptIcon3,
                    xDeptDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.",
                }
            ],
            accordionQustionAns: [
                {
                    _id: 1,
                    title: "For endocrine problems",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 2,
                    title: "For the digestive system",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 3,
                    title: "For the ear, nose and oropharynx",
                    mainTheme: "Drug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions."
                },
                {
                    _id: 4,
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
            ],
            deptHours: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ]
        }
    ]

    const sideNavList = ["Asthma and Allergy", "Cancer Services", "Cystic Fibrosis", "Endoscopy", "Colorectal", "Hemorrhoids"];
    const deptNavigatorCardData = [
        {
            _id: 1,
            deptNavigatorCardIcon: iconDepertment1,
            deptNavigatorCardTitle: "Find Your Doctor",
            deptNavigatorCardDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may visit without permission.",
            buttonDesign: "btn border-none hover:text-[#17449e] hover:bg-white bg-white text-[#17449e] rounded-full shadow-xl",
        },
        {
            _id: 2,
            deptNavigatorCardIcon: iconDepertment2,
            deptNavigatorCardTitle: "Special Care Unit",
            deptNavigatorCardDetails: "Open visitation with only two visitors in a room at any given time. No one under 12 years of age may visit without permission.",
            buttonDesign: "btn border-none hover:text-white hover:bg-[#17449e] bg-[#17449e] text-white rounded-full shadow-xl",
        }
    ]

    const targetedService = data?.find(service => service._id === serviceId);

    return (
        <div>
            <SectionBanner banner={targetedService?.serviceTopBannerBanner} moto={targetedService?.serviceName} subTitle={targetedService?.serviceAboutTitle} />

            <div className='w-[90%] lg:w-5/6 mx-auto lg:mt-20 mt-12 grid lg:grid-cols-7 grid-cols-1 gap-10'>
                <div className='lg:col-span-5 text-secondary'>
                    <div className='grid grid-cols-1 lg:grid-cols-6 gap-8 items-center'>
                        <div className='lg:col-span-2'>
                            <img src={targetedService?.sargonDoctor} alt="" />
                        </div>
                        <div className='lg:col-span-4 flex flex-col gap-6'>
                            <h1 className='text-black font-bold text-3xl'>{targetedService?.serviceAboutTitle}</h1>
                            <p className='leading-relaxed'>{targetedService?.mainTheme}</p>

                            <ul className='flex flex-col gap-3'>
                                {
                                    targetedService?.servicePoints?.map(eachServicepoint =>
                                        <li className='flex items-center gap-2'>
                                            <div className='w-[15px] h-[15px] border border-primary rounded-full flex items-center justify-center'>
                                                <div className='w-[7px] h-[7px] bg-primary rounded-full'></div>
                                            </div>
                                            <p>{eachServicepoint}</p>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            targetedService?.someDeptservice?.map(eachDept =>
                                <div className='items-center text-center flex flex-col'>
                                    <div className='w-[150px] h-[150px] p-8'>
                                        <img src={eachDept.xsDeptIcon} alt="" />
                                    </div>
                                    <h2 className='text-xl text-primary font-bold mb-6'>{eachDept.xDeptTitle}</h2>
                                    <p className='text-[#9c9c9c}'>{eachDept.xDeptDetails}</p>
                                </div>
                            )
                        }
                    </div>

                    <div className='mt-20 flex flex-col gap-4'>
                        {
                            targetedService?.accordionQustionAns?.map((eachQA, index) =>
                                <div tabIndex={index} className="collapse collapse-plus rounded">
                                    <div className="collapse-title text-primary text-xl font-bold bg-[#F3F3F3]">
                                        {eachQA.title}
                                    </div>
                                    <div className="collapse-content">
                                        <div><p className='hidden'>{index}</p>
                                            <p className='pt-4 text-lg'>{eachQA.mainTheme}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className='mt-16 flex flex-col gap-5 border-b-[3px] pb-8 border-[#17449e]'>
                        <h2 className='text-black text-3xl font-bold'>{targetedService?.serviceAnotherPoint}</h2>
                        <p className='text-[#17449e] text-xl'>{targetedService?.serviceAnotherPointSubtitle}</p>
                        <p className='leading-relaxed'>{targetedService?.serviceAnotherPointDetails}</p>
                    </div>

                    <div className='mt-16 grid lg:grid-cols-2 grid-cols-1 gap-6'>
                        {
                            deptNavigatorCardData?.map(eachNavigatorcard =>
                                <div className='flex flex-col gap-6 items-start bg-[#F3F9FF] p-10 border'>
                                    <div className='flex gap-4 items-center'>
                                        <img src={eachNavigatorcard.deptNavigatorCardIcon} alt="" />
                                        <p className='text-xl text-primary font-bold'>{eachNavigatorcard.deptNavigatorCardTitle}</p>
                                    </div>
                                    <p className='text-[#a0bfe8] leading-relaxed text-[17px]'>{eachNavigatorcard.deptNavigatorCardDetails}</p>
                                    <button className={eachNavigatorcard.buttonDesign}>Learn More</button>
                                </div>
                            )
                        }
                    </div>

                    <div className='mt-12 border-b-[3px] pb-12 border-[#17449e]'>
                        <h2 className='text-[#17449e] font-bold text-2xl mb-8'>Treatment Price List</h2>

                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-14'>
                            <div className='flex flex-col gap-4'>
                                {
                                    targetedService?.treatmentPriceList1?.map(eachPrice =>
                                        <div className='flex justify-between items-baseline gap-2 pb-2'>
                                            <p className='text-[#9c9c9c} text-[17px]'>{eachPrice.treatmentName}</p>
                                            <p className='font-bold text-secondary text-lg'>£{eachPrice.treatmentPrice}</p>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='flex flex-col gap-4'>
                                {
                                    targetedService?.treatmentPriceList2?.map(eachPrice =>
                                        <div className='flex justify-between items-baseline gap-2 pb-2'>
                                            <p className='text-[#9c9c9c} text-[17px]'>{eachPrice.treatmentName}</p>
                                            <p className='font-bold text-secondary text-lg'>£{eachPrice.treatmentPrice}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className='mt-12 flex flex-col gap-6'>
                        <h2 className='text-black font-medium text-3xl'>Make an appointment</h2>
                        <p className='text-[#17449e] text-xl'>We will send you a confirmation within 24 hours. <strong>Emergency?</strong> Call 1-2554-2356-33</p>
                        <p className='text-secondary text-[17px]'>Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association.</p>

                        <form className='lg:w-4/5 w-full mt-10 flex flex-col gap-6'>
                            <div className='flex justify-between gap-2'>
                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />

                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />
                            </div>
                            <div className='flex justify-between gap-2'>
                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />

                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />
                            </div>
                            <div className='flex justify-between gap-2'>
                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />

                                <select className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-secondary' >
                                    <option value="" key="">One</option>
                                    <option value="" key="">Two</option>
                                    <option value="" key="">Three</option>
                                    <option value="" key="">Four</option>
                                    <option value="" key="">Five</option>
                                </select>
                            </div>
                            <div className='flex justify-between gap-2'>
                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />

                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />
                            </div>
                            <textarea rows='5' placeholder='Message' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black resize-none'></textarea>
                            <input className='w-full bg-primary text-white p-[1rem] rounded-none cursor-pointer btn' type="submit" value='SUBMIT NOW' />
                        </form>
                    </div>
                </div>
                <div className='lg:col-span-2'>
                    <div className='text-primary flex flex-col'>
                        <h2 className='text-black mb-6 text-2xl font-bold'>General Surgery</h2>
                        {
                            sideNavList?.map(eachNav =>
                                <div className='border-b py-3 flex items-center gap-3'>
                                    <div className='w-[2px] h-full bg-primary'></div>
                                    <Link className='hover:translate-x-1 duration-300 font-medium'>{eachNav}</Link>
                                </div>
                            )
                        }
                    </div>

                    <div style={{ background: `url(${DepertmentPic})`, backgroundPosition: "center", backgroundSize: "cover" }} className='mt-12 rounded flex flex-col gap-4 px-10 py-14'>
                        <h1 className='text-white text-xl font-bold'>Department Address</h1>
                        <p className='text-[#c3c3ff]'>Box 3233 1810 Kings Way King Street, 5th Avenue, New York</p>
                    </div>

                    <div className='flex flex-col gap-3 mt-12 text-[#17449e]'>
                        <p className='text-black mb-4 font-bold text-2xl'>Department Hours</p>
                        {
                            targetedService?.deptHours?.map(eachSchedule =>
                                <span className='border-b pb-3 flex justify-between items-center'>
                                    <p>{eachSchedule.day}</p>
                                    <span className='flex gap-2 items-center'>
                                        <p className='font-bold'>{eachSchedule.time}</p>
                                        <span className='text-lg'><CiClock2 /></span>
                                    </span>
                                </span>
                            )
                        }
                    </div>

                    <button className='btn btn-primary text-white rounded-none mt-10 btn-xl w-full'>Download PDF File</button>
                </div>
            </div>

            <div className='mt-24'>
                <HealthProfessional />
            </div>
        </div>
    );
};

export default ServiceDetailsPage;