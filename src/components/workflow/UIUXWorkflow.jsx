import { useTranslation } from 'react-i18next';

const UIUXWorkflow = () => {
	const { t } = useTranslation('serviceDetails');
	return (
		<>
			<section className="workflow__area-6">
				<div className="container g-0 line pb-130">
					<div className="line-3"></div>
					<div className="workflow__wrapper-6">
						<div className="row">
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
								<div className="workflow__slide-6">
									<h6 className="workflow__title-6">
										<span>{t('thietKeUIUX.UIUXWorkflow.1.title.line1')}</span> <br />
										<span>{t('thietKeUIUX.UIUXWorkflow.1.title.line2')}</span>
									</h6>
									<p>{t('thietKeUIUX.UIUXWorkflow.1.description')}</p>
								</div>
							</div>

							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
								<div className="workflow__slide-6">
									<h6 className="workflow__title-6">{t('thietKeUIUX.UIUXWorkflow.2.title')}</h6>
									<p>{t('thietKeUIUX.UIUXWorkflow.2.description')}</p>
								</div>
							</div>

							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
								<div className="workflow__slide-6">
									<h6 className="workflow__title-6">
										<span>{t('thietKeUIUX.UIUXWorkflow.3.title.line1')}</span> <br />
										<span>{t('thietKeUIUX.UIUXWorkflow.3.title.line2')}</span>
									</h6>
									<p>{t('thietKeUIUX.UIUXWorkflow.3.description')}</p>
								</div>
							</div>

							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
								<div className="workflow__slide-6">
									<h6 className="workflow__title-6">
										<span>{t('thietKeUIUX.UIUXWorkflow.4.title.line1')}</span> <br />
										<span>{t('thietKeUIUX.UIUXWorkflow.4.title.line2')}</span>
									</h6>
									<p>{t('thietKeUIUX.UIUXWorkflow.4.description')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UIUXWorkflow;
