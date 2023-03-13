import React, { useState } from 'react';
import { InjectedFormProps } from 'redux-form';
import { Stepper } from 'react-form-stepper';
import Card from '@mui/material/Card';
import AccountDetailForm from './AccountDetailForm';
import PersonalDetailForm from './PersonalDetailForm';

export const Form: React.FC<InjectedFormProps> = (props: any) => {
    const [page, setPage] = useState(0);
    const steps = [{ label: 'Personal Details'}, { label: 'Account Detail'}];

    const { onSubmit, isLoading } = props;

    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        setPage(page - 1);
    };

    return (
        <Card>
            <Stepper steps={steps} activeStep={page} />
            {page === 0 && <PersonalDetailForm onSubmit={nextPage} />}
            {page ===1 && (
                <AccountDetailForm isLoading={isLoading} previousPage={previousPage} onSubmit={onSubmit} />
            )}
        </Card>
    );
}