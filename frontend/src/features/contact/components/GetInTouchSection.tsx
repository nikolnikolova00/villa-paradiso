import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { ScrollReveal, Section } from 'components';
import { contactInfoKeys, site } from 'data';
import { colors } from 'theme';
import type { ContactInfoKey } from 'types';
import { emptyContactForm, sendContactMessage } from 'services';
import type { ContactFormValues } from 'services';

const infoIcons: Record<ContactInfoKey, SvgIconComponent> = {
  email: EmailOutlinedIcon,
  phone: PhoneOutlinedIcon,
  address: PlaceOutlinedIcon,
};

const infoValues: Record<ContactInfoKey, string> = {
  email: site.email,
  phone: site.phone,
  address: site.address,
};

const infoHrefs: Record<ContactInfoKey, string | undefined> = {
  email: `mailto:${site.email}`,
  phone: `tel:${site.phone.replace(/\s+/g, '')}`,
  address: undefined,
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const GetInTouchSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState<ContactFormValues>(emptyContactForm);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange =
    (field: keyof ContactFormValues) =>
      (event: React.ChangeEvent<HTMLInputElement>) =>
        setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      await sendContactMessage(form, {
        subject: t('contact.form.defaultSubject'),
        autoresponse: t('contact.form.autoresponse'),
      });
      setStatus('success');
      setForm(emptyContactForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section sx={{ pt: { xs: 0, md: 0 }, pb: { xs: 10, md: 10 } }}>
      <Paper
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          border: `1px solid ${colors.sandDark}`,
          boxShadow: '0 30px 70px -45px rgba(10, 58, 74, 0.45)',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 6, md: 10 },
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.4fr' },
            alignItems: 'start',
          }}
        >
          <ScrollReveal>
            <Stack spacing={3}>
              <Typography variant="overline" sx={{ color: colors.terracotta }}>
                {t('contact.info.overline')}
              </Typography>
              <Typography variant="h2">{t('contact.info.title')}</Typography>
              <Typography variant="body1" sx={{ color: colors.muted }}>
                {t('contact.info.body')}
              </Typography>

              <Stack spacing={2.5} sx={{ pt: 1 }}>
                {contactInfoKeys.map((key) => {
                  const Icon = infoIcons[key];
                  const href = infoHrefs[key];
                  const value = infoValues[key];

                  return (
                    <Stack key={key} direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                      <Box
                        sx={{
                          display: 'grid',
                          placeItems: 'center',
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          backgroundColor: colors.sand,
                          color: colors.sea,
                          flexShrink: 0,
                        }}
                      >
                        <Icon fontSize="small" />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: colors.muted }}>
                          {t(`contact.info.items.${key}`)}
                        </Typography>
                        {href ? (
                          <Link href={href} underline="hover" sx={{ color: colors.ink, fontWeight: 600 }}>
                            {value}
                          </Link>
                        ) : (
                          <Typography sx={{ color: colors.ink, fontWeight: 600 }}>
                            {value}
                          </Typography>
                        )}
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>

              <Divider sx={{ borderColor: colors.sandDark }} />

              <Box>
                <Typography variant="body2" sx={{ color: colors.muted, mb: 1 }}>
                  {t('contact.info.follow')}
                </Typography>
                <Stack direction="row" spacing={2}>
                  {site.socials.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      underline="hover"
                      sx={{ color: colors.sea, fontWeight: 600 }}
                    >
                      {social.label}
                    </Link>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                backgroundColor: colors.white,
                border: `1px solid ${colors.sandDark}`,
                boxShadow: '0 30px 70px -45px rgba(10, 58, 74, 0.45)',
              }}
            >
              <Typography variant="h3" sx={{ mb: 3 }}>
                {t('contact.form.title')}
              </Typography>

              <Stack spacing={2.5}>
                <Box
                  sx={{
                    display: 'grid',
                    gap: 2.5,
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    name="name"
                    label={t('contact.form.nameLabel')}
                    value={form.name}
                    onChange={handleChange('name')}
                  />
                  <TextField
                    required
                    fullWidth
                    type="email"
                    name="email"
                    label={t('contact.form.emailLabel')}
                    value={form.email}
                    onChange={handleChange('email')}
                  />
                </Box>
                <TextField
                  fullWidth
                  type="tel"
                  name="mobile"
                  label={t('contact.form.mobileLabel')}
                  placeholder={t('contact.form.mobilePlaceholder')}
                  value={form.mobile}
                  onChange={handleChange('mobile')}
                />
                <TextField
                  fullWidth
                  name="subject"
                  label={t('contact.form.subjectLabel')}
                  placeholder={t('contact.form.subjectPlaceholder')}
                  value={form.subject}
                  onChange={handleChange('subject')}
                />
                <TextField
                  required
                  fullWidth
                  multiline
                  minRows={5}
                  name="message"
                  label={t('contact.form.messageLabel')}
                  value={form.message}
                  onChange={handleChange('message')}
                />

                {status === 'success' && (
                  <Alert
                    severity="success"
                    onClose={() => setStatus('idle')}
                    sx={{ borderRadius: 2 }}
                  >
                    {t('contact.form.autoresponse')}
                  </Alert>
                )}

                {status === 'error' && (
                  <Alert
                    severity="error"
                    onClose={() => setStatus('idle')}
                    sx={{ borderRadius: 2 }}
                  >
                    {t('contact.form.error')}
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<SendOutlinedIcon />}
                  disabled={status === 'submitting'}
                  sx={{ alignSelf: 'flex-start' }}
                >
                  {status === 'submitting'
                    ? t('contact.form.sending')
                    : t('contact.form.submit')}
                </Button>
              </Stack>
            </Box>
          </ScrollReveal>
        </Box>
      </Paper>
    </Section>
  );
};
